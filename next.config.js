const { isStyledComponent } = require('styled-components')

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents:true
    }   
}

module.exports = nextConfig
