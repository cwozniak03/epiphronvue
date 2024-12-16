<template>
    <div v-bind:id='chartID'></div>
</template>

<script>
import Plotly from 'plotly.js-dist';

export default{
    props:['distData','gamma', 'chartID'],
    data (){
        return {
            id: null
        }
    },
    computed:{    
        xy:{ 
            get: function(){
                //console.log(this.distData)
                return this.computeXY(this.distData,this.gamma)
                }
            }
        },
    watch:{
        xy: function(){
            this.generateChart()
        }
    },
    mounted (){
        this.computeXY(this.distData, this.gamma);
        this.generateChart()
    },
    methods:{
        computeXY(vals, gamma){
            //console.log('this is happening')
            //console.log(vals)
            let min = vals[0]
            let mode = vals[1]
            let max = vals[2]

            let a = 1+(gamma*((mode - min)/(max - min)))
            let b = 1+(gamma*((max - mode)/(max - min)))

            let newDataX = [];
            let newDataY = [];
            if(min == max) {
            let temp = {
                x: 0,
                y: 0
            }
            } else {
                for (let i = 0; i <= 100; i++){
                    let step = (max - min)/100

                    let tmpX = 0
                    let tmpY = 0.0

                    tmpX = Math.min((min+step*i),max)
                    tmpY = this.betaPDF(tmpX, a, b, min, max)
                    //console.log(tmpY)
                    

                    newDataX.push(tmpX)
                    newDataY.push(tmpY)
                }
            }

            let newData ={
                x: newDataX,
                y: newDataY
            }
            //console.log(newData)
            return newData
        },
        lnBetaFunc(a,b){
            let tmp = 0.0

            for (let i=0; i<a-2; i++) {
                tmp += Math.log(a-1-i);
            }
            for (let i=0; i<b-2; i++) {
                tmp += Math.log(b-1-i);
            }
            for (let i=0; i<a+b-2; i++) {
                tmp -= Math.log(a+b-1-i);
            }
            return tmp
        },
        lnBetaPDF(x, a, b, min, max){
            return ((a-1)*Math.log(x - min) + (b-1)*Math.log(max-x)) - (this.lnBetaFunc(a,b) + (a + b + 1)*Math.log(max - min))
        },
        betaPDF(x, a, b, min, max) {
            return Math.exp(this.lnBetaPDF(x, a, b, min, max))
        },
        adjSliderMin(val){
            let tmp = 0
            tmp = Math.min(0, val - 10)
            return tmp
        },
        adjSliderMax(val){
            let tmp = 0
            tmp = Math.max(100, val + 10)
            return tmp
        },
        adjSliderMaxGamma(val){
            let tmp = 0
            tmp = Math.max(10, val + 1)
            return tmp
        },
        generateChart(){
            let trace = {
                x: this.xy.x,
                y: this.xy.y,
                type: 'scatter'
            }
            let tmpPlot = [trace]

            Plotly.newPlot(this.chartID, tmpPlot);

        }
    }

}

</script>

<style scoped>
#chart{
    place-items:center;
}
#sliders{
    place-items:center;
}
</style>