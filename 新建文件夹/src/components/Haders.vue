<template>
    <div>
        <div class="top">
            <p class="top-p1">木点工坊</p>
            <p class="top-p2">
                <input type="text" name="" id="" class="in" placeholder="搜索商品和文章">
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Haders"
    }
</script>

<style>
.top{
    width: 100%;
    height: 90px;
    background: #2f374a;
    display: flex;
    
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
}
.top-p1{
    margin-bottom: 10px;
    margin-left: 15px;
    color: #fff;
}
.top-p2{
    text-align: center;
}
.in{
    width: 90%;
}
</style>