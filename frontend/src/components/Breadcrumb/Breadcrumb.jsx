import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import "./Breadcrumb.scss";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack';


const Breadcrumb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnames =  pathname.split('/').filter(x => x);

  return (
    <Stack className="breadcrumb" spacing={1}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link onClick={() => navigate("/")} key="1">Home</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length -1;

          return isLast ? (
            <Typography key={index + 1}>
              {name.charAt(0).toUpperCase() + name.replace("-", " ").slice(1)}
            </Typography>
            ) : (
            <Link onClick={() => navigate(routeTo)} key={index + 1}>
              {name.charAt(0).toUpperCase() + name.replace("-", " ").slice(1)}
            </Link>
          );   
        })};   
      </Breadcrumbs>
    </Stack>
  );
}

export default Breadcrumb;