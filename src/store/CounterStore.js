import create from 'zustand'

const useCounterStore = create((set) => {
    return({
        count: 0,
        increment: (value) => set(state => ({
            count: state.count + value
        }))
    })
})

export default useCounterStore