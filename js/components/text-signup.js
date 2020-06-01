Vue.component('text-signup', {
    data: function () {
        return {
            phone: ""
        }
    },
    template: `
    <label v-model="phone" class="d-none">Phone number</label>
    <input type="tel" placeholder="Phone number">
    <a class="btn btn--primary type--uppercase btn-block mt-4" href="#">
        <span class="btn__text">
            Text Me
        </span>
    </a>
    `
})