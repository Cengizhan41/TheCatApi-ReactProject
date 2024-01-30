import styled from "styled-components";


export const StyledDiv=styled.div`

&:hover{
   transform: scale(1.05);
   transition: all .5s;
}

.card{
    height: 20rem !important;
    .img-wrap{
        height: 17rem !important;
        text-align: center;
        padding: 1rem;
        display: block;
    }
    img{
        height: 100%;
        width: 75%;
        max-width: 100%;
        object-fit: cover;
        border-radius: 10px;
        
    }
    .card-body{
        height: 3rem;
        
    }
}
@media (max-width:768px){
    margin: auto ;
    .card{
    height: 15rem !important;
    .img-wrap{
        height: 10rem !important;
        text-align: center;
        padding: 1rem;
        display: block;
    }
    img{
        height: 100%;
        width: 85%;
        max-width: 100%;
        object-fit: cover;
        border-radius: 10px;
        
    }
    .card-body{
        height: 3rem;
        
    }
}
 }

`