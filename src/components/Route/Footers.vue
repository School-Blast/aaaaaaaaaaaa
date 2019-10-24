<template>
  <div>
    <ul class="footer-ul">
      <li>
        <router-link to="/a" tag="p">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye" />
          </svg>
          <p>木点主页</p>
        </router-link>
      </li>

      <li>
          <router-link to="/b" tag="p"><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenlei" />
        </svg>
        <p>商品分类</p></router-link>
        
      </li>

      <li>
          <router-link to="/c" tag="p"><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yewutubiao_tushuguanlixitong" />
        </svg>
        <p>居家分享</p></router-link>
        
      </li>
      <li>
          <router-link to="/d" tag="p"><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche" />
        </svg>
        <p>购物车区</p></router-link>
        
      </li>
      <li>
          <router-link to="/e" tag="p"><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wode" />
        </svg>
        <p>我的工坊</p></router-link>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer-ul {
  display: flex;
  list-style: none;
}
.footer-ul li {
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 20px;
}
.footer-ul li p {
  font-size: 14px;
}
</style>