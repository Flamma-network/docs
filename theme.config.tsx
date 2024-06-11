import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div style={{
    display:'flex',
    alignItems:'center',
    gap:'4px'
  }}><img src={'/icon.svg'} width='30px'  />Flamma network</div>,
  project: {
    link: 'https://github.com/Flamma-network/docs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/Flamma-network/docs',
  
  footer: {
    text: '© 2024 Flamma network',
  },
  toc: {
    title: 'Table of contents'
  },
}

export default config
