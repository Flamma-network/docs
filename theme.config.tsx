import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { TwitterX } from './components/icons/index'

const config: DocsThemeConfig = {
  logo: <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  }}><img src={'/icon.svg'} width='30px' />Flamma network</div>,
  project: {
    link: 'https://github.com/Flamma-network/docs',
  },
  chat: {
    link: 'https://discord.gg/CUtsSjn9AA',
  },
  navbar: {
    extraContent: () => {
      return <>
        <a href="https://x.com/flamma_network" target="_blank" className='nx-p-2 nx-text-current'>
          <TwitterX width="24px" height="24px" />
        </a>
      </>
    }
  },

  docsRepositoryBase: 'https://github.com/Flamma-network/docs/tree/main',

  footer: {
    text: '© 2024 Flamma network',
  },
  toc: {
    title: 'Table of contents'
  },
}

export default config
