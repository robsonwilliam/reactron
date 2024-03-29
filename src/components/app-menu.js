import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import IconTotvs from '../icons_svg/icon-totvs'
import Welcome from './welcome';
import BasicForm from './basic-form';
import Command from './command';
import AppAbout from './app-about';
import Rest from './rest'

export default function AppMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickOpt(page){
    props.mainApp.routePage(page)
    handleClose()
  }

  const appButton = {
    WebkitAppRegion: "no-drag"
  }

  return (
    <div>
      {/* Icone da TOTVS eh o menu */}
      <Tooltip title="Menu principal">
          <IconButton color="inherit" size="small" style={ appButton  }
              onClick={handleClick}
              >
              <IconTotvs width="28"/>
          </IconButton>
      </Tooltip>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {handleClickOpt(Welcome)}}>Bem-vindo</MenuItem>
        <MenuItem onClick={() => {handleClickOpt(BasicForm)}}>Formulario</MenuItem>
        <MenuItem onClick={() => {handleClickOpt(Command)}}>Executa Comando</MenuItem>
        <MenuItem onClick={() => {handleClickOpt(Rest)}}>Consome Rest</MenuItem>
        <Divider/>
        <MenuItem onClick={() => {handleClickOpt(AppAbout)}}>Sobre...</MenuItem>
      </Menu>
    </div>
  );
}