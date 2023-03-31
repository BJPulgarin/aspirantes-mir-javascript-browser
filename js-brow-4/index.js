const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
  ]

const container = document.getElementById("container")
let cnt = 1

function maping(menu, cont){
    const ul = document.createElement("ul")
    menu.map((element) => {
        const li = document.createElement("li")
        li.textContent = element.name
        ul.appendChild(li)
        if (element.items.length !== 0){
            li.setAttribute("class", "off")
            li.setAttribute("id", cnt.toString())
            cnt+=1
            span = document.createElement("span")
            span.setAttribute("class", "downBar")
            li.appendChild(span)
            maping(element.items, li)
        }
        console.log(li)
    })
    cont.appendChild(ul)
}

maping(menu, container)

for (let i=1; i<cnt; i++ ){
    element = document.getElementById(i.toString)
    console.log("Elemento "+ i + " " + element.value)
}
