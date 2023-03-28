import { useLoading } from 'vue-loading-overlay';
let load
// const con = document.getElementsByTagName("body")[0]

export default class Widget {
    static openLoading = (con) => {
        let container = con ?? null
        load = useLoading().show({
            loader: "bars",
            color: "#2BA33C",
            width: 64,
            height: 64,
            container,
        })
        setTimeout(function () {
            load.hide()
        }, 30000)
    }
    static dismiss = () => {
        load.hide()
    }
    static goTo = (link) => {
        setTimeout(function () {
            this.$router.push(link)
        }, 0)
    }
}



