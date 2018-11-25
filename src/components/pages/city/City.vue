<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hot="hot" :cities="cities" :letter="letter"  ></city-list>
        <city-alphabet @change="handleLetterChange"  :cities="cities" ></city-alphabet>
    </div> 
</template>

<script>
import CityHeader from "./components/Header.vue"
import CitySearch from "./components/Search.vue"
import CityList from "./components/List.vue"
import CityAlphabet from "./components/Alphabet.vue"
import axios from 'axios'

export default {
    name: "City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            hot:[],
            cities:{},
            letter:''
        }
    },
    methods:{
        getCityInfo(){
            axios.get('api/city.json').then(this.getCityInfoSucc);
        },
        getCityInfoSucc(res){
            //console.log(res);
            res = res.data;
            if(res.ret && res.data){
                const data = res.data;
                //console.log(data);
                this.hot = data.hotCities;
                this.cities = data.cities;
                //console.log(this.hot);
                //console.log(this.cities);
            }
        },
        handleLetterChange(letter){
            this.letter = letter;
        }
       

    },
    mounted(){
        this.getCityInfo();
    }
    
}
</script>

<style lang="stylus"  scoped>


</style>