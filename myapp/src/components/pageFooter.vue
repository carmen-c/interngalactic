<template>
<div class="pageFooter">
<footer id="myFooter">
    <div class="footer-social">
        <ul>
            <li><a href="#">Company Information</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Terms of service</a></li>
        </ul>
        <a href="#" class="social-icons"><i class="fa fa-facebook"></i></a>
        <a href="#" class="social-icons"><i class="fa fa-google-plus"></i></a>
        <a href="#" class="social-icons"><i class="fa fa-twitter"></i></a>
        <br>
        <br>
        <br>
        <p class="footer-copyright">InternGalactic © 2019</p>
    </div>
</footer>
</div>
</template>

<script>
// @ is an alias to /src
  
export default {
  name: "pageFooter"
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  
  #myFooter{
    padding-top:32px;
}

#myFooter .container{
    text-align: center;
}

#myFooter .footer-copyright{
    margin-bottom: 35px;
    text-align: center;
    color: #666;
}

#myFooter ul{
    list-style-type: none;
    padding: 0;
    margin-bottom: 18px;
}

#myFooter a{
    color: #666;
    font-size: 18px;
}

#myFooter li{
    display: inline-block;
    margin: 0px 15px;
    line-height: 2;
}

#myFooter .footer-social{
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #eee;
}

#myFooter .fa{
    font-size: 16px;
    margin-right: 15px;
    margin-left: 20px;
    background-color: white;
    color: #d0d0d0;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding-left: 2px;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
    transition:color 0.2s;
}

#myFooter .fa-facebook:hover{
   color: #2b55ff;
}

#myFooter .fa-facebook:focus{
    color: #2b55ff; 
}

#myFooter .fa-google-plus:hover{
    color:red;
}

#myFooter .fa-google-plus:focus{
    color:red;
}

#myFooter .fa-twitter:hover{
    color: #00aced;

}

#myFooter .fa-twitter:focus{
    color:#00aced;
}


/* CSS used for positioning the footers at the bottom of the page. */
/* You can remove this. */

html{
    height: 100%;
}

body{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    height: 100%;
}

.content{
   flex: 1 0 auto;
   -webkit-flex: 1 0 auto;
   min-height: 200px;
}

#myFooter{
   flex: 0 0 auto;
   -webkit-flex: 0 0 auto;
}

</style>