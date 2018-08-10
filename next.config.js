module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog/hello-nextjs': { page: '/post', query: { title: "Hello Next.js" } },
      '/blog/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
      '/blog/deploy-nextjs': { page: '/post', query: { title: "Deploy apps with Zeit" } },
      '/blog/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } }
    }
  }
}
