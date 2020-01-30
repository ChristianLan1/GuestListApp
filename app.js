let vm1 = new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
        
        },
        newNameText: '',
        guestName: [],
        
        
        eventCapacity:25,
        eventCapacityPercentage: 0
    },
    methods: {
        formSubmitted: function (){
            if(this.newNameText.length >0 && this.eventCapacity <=25){
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity /100)
                
            }
            
        },
        keyPressed: function(){
            console.log("key triggered")
        }
        // test: function(){
        //     console.log('method text')
        // }
    },
    computed: {
        sortNames: function(){
            return this.guestName.sort()
        }
    },
    watch:{
        guestName: function(data){
            console.log('Watch triggered')

        }
    },
    filters:{
        
        formatNames: function(value){
            return value.slice(0,1).toUpperCase()+value.slice(1).toLowerCase()
        }
    },
    beforeCreate: function(){
        console.log("before create")
    },
    created: function(){
        console.log("created")
    },
    beforeMount: function(){
        console.log("before mounted")
    },
    mounted: function(){
        console.log("mounted")
    },
    beforeUpdate: function(){
        console.log("before updae")
    },
    updated: function(){
        console.log("updated")
    },
    beforeDestroy: function(){
        console.log("beforeDestroy")
    },
    destroyed: function(){
        console.log("destroyed")
    }

});

let vm2 = new Vue({
    el: '#navigation',
    data:{
        appName:'Guest List',
        navLinks:[
            {name:'Home',id:1,url:"https://www.google.com"},
            {name:'Upcoming events',id:2,url:"https://www.amazon.com"},
            {name:'Guest Benefits',id:3,url:"https://www.ebay.com"},
            {name:'Latest News',id:4,url:"https://www.baidu.com"}
        ]
    },
    methods:{
        changeTitle: function(){
            this.$refs.name.innerText = 'Title Changed'
        }
    }
})


console.log(vm1)

