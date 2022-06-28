const nameReg = /([a-z0-9]+)\./i
const paths = import.meta.globEager('./views/demos/**/*.vue')
const demos: any = []
for (const path in paths) {
  const name = path.match(nameReg)[1]
  demos.push({
    path: `${name.toLowerCase()}`,
    name: `demo-${name.toLowerCase()}`,
    component: paths[path].default,
    meta: {
      label: name,
    },
  })
}

export default demos
