import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import './App.css';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

import { Homepage } from './pages/Homepage/Homepage';
import { ForumsThreads } from './pages/Forums/ForumsThreads/ForumsThreads';

// Auth
import { SignIn } from './pages/Auth/SignIn/SignIn';
import { SignOut } from './pages/Auth/SignOut/SignOut';

// Error
import { Notfound } from './pages/Notfound404/Notfound404';


function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
    localStorage.setItem("SidebarIsOpen", !isOpen);
  }

  useEffect(() => {
    const sidebarIsOpen = localStorage.getItem("SidebarIsOpen");
        
    sidebarIsOpen === null && localStorage.setItem("SidebarIsOpen", JSON.stringify(true)); 
    
    if (sidebarIsOpen != null) {
      if (!JSON.parse(sidebarIsOpen)) {
        setIsOpen(false)
      }
    } 
  }, [])

  return (
    <div 
      className="container"
      style={{
        gridTemplateColumns: isOpen ? "240px calc(100% - 240px)" : "76px calc(100% - 76px)"
      }}
    >
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="forums" element={<ForumsThreads />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-out" element={<SignOut />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>

      <Header />
      <AnimatePresence>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </AnimatePresence>
    </div>
  );
}

export default App;
