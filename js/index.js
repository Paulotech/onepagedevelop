const instance = basicScroll.create({
    elem: document.querySelector('.square'),
    from: '0',
    to: '800',
    direct: true,
    props: {
       '--r': {
          from: '0',
          to: '180deg'
       },
       '--tx': {
          from: '-100px',
          to: '100px'
       },
       '--w': {
          from: '100px',
          to: '200px'
        },
       '--h': {
          from: '100px',
          to: '200px'
        }
    }
 });
 
 instance.start()