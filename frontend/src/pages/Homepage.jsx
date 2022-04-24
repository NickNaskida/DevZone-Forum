import { React } from 'react';

import './Homepage.scss';

import Announcement from '../components/HomepageComps/Announcement/Announcement'
import WelcomeCard from '../components/HomepageComps/WelcomeCard/WelcomeCard'


const Homepage = () => {
  return (
    <div className="homepage__wrapper">
      <section>
        <Announcement />
        <WelcomeCard />
      </section>
      <aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus accusamus adipisci aliquam explicabo quis, ipsa vel voluptatem, reprehenderit ut nihil molestiae, ratione sed reiciendis id saepe a et? Nobis!
        Architecto at tempora, itaque ex, nisi numquam fuga ipsum iste quidem ratione maiores assumenda necessitatibus vitae recusandae neque cumque omnis esse quasi sequi ipsa labore. Libero optio dicta similique dolores?
        Minus voluptatem iusto harum ullam nobis officia qui obcaecati inventore similique aut quibusdam perferendis laborum repellat atque necessitatibus, possimus facere, nisi numquam adipisci quam consequuntur hic. Iure praesentium voluptate necessitatibus.
        Dolores, adipisci. Doloremque, cupiditate?
      </aside>
    </div>   
  )
}

export { Homepage }