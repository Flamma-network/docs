import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { TwitterX } from './components/icons/index'

const config: DocsThemeConfig = {
  logo: <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  }}>
    <svg width="83" height="64" viewBox="0 0 83 64" xmlns="http://www.w3.org/2000/svg" className='white size-[24px] dark:text-white'>
      <path fill-rule="evenodd" clip-rule="evenodd"
        stroke="currentColor"
        d="M60.8269 0.647217H79.202H82.721L77.5675 12.5815H74.1498H55.7781L60.8269 0.647217ZM27.9401 0.647512L23.722 3.51676L0.186646 59.8545L1.62869 63.1845L25.7213 38.6284H32.918L37.8723 26.9245H30.1623L36.822 12.5818H52.8399L57.8887 0.647512H27.9401ZM35.8562 38.6285L40.8105 26.9246H63.2146H65.7981L61.1342 38.6285H58.2636H35.8562Z" fill="currentColor" />
    </svg>
    <p>Flamma network</p>
  </div>,
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
