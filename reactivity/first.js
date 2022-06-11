const targetMap = new WeakMap()

const track = (target, key) => {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    let dep = deepsMap.get(key)
    if (!dep) {
        dep = new Set()
        depsMap.set(key, dep)
    }
    dep.add(effect)
}

const trigger = (target, key) => {
    const depsMap = targetMap.get(target)
    if (!depsMap) return
    const dep = depsMap.get(key)
    if (!dep) {
        dep.forEach((effect) => effect())
    }
}
let product = { price: 5, quantity: 2 }
let total = 0
let effect = () => (total = product.price * product.quantity)
track(product, 'quantity')
effect()
