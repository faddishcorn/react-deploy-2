"use strict";(self.webpackChunkkakao_tech_campus_frontend_project=self.webpackChunkkakao_tech_campus_frontend_project||[]).push([[983],{3983:(t,e,a)=>{a.d(e,{worker:()=>j});var n=a(8689),s=a(6732);const o=[n.rest.get((0,s.oX)(),((t,e,a)=>e(a.json(r))))],r=[{id:2920,name:"\uc0dd\uc77c",description:"\uac10\ub3d9\uc744 \ub192\uc5ec\uc904 \uc0dd\uc77c \uc120\ubb3c \ub9ac\uc2a4\ud2b8",color:"#5949a3",imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"},{id:2930,name:"\uad50\ud658\uad8c",description:"\ub193\uce58\uba74 \ud6c4\ud68c\ud560 \uad50\ud658\uad8c \ud2b9\uac00",color:"#9290C3",imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240131153049_5a22b137a8d346e9beb020a7a7f4254a.jpg"}];var c=a(4715),d=a(2382),p=a(6316);const i=t=>{let{categoryId:e,pageToken:a,maxResults:n}=t;const s=new URLSearchParams;return s.append("categoryId",e),s.append("sort","name,asc"),a&&s.append("page",a),n&&s.append("size",n.toString()),"".concat(p.C1,"/api/products?").concat(s.toString())},u=[n.rest.get(i({categoryId:"2920"}),((t,e,a)=>e(a.json(m)))),n.rest.get(i({categoryId:"2930"}),((t,e,a)=>e(a.json(m)))),n.rest.get((0,c.oR)(":productId"),((t,e,a)=>{const n=t.params.productId,s=Array.isArray(n)?n[0]:n,o=m.content.find((t=>t.id===parseInt(s,10)));return o?e(a.json(o)):e(a.status(404),a.json({message:"Product not found"}))})),n.rest.get((0,d.HQ)(":productId"),((t,e,a)=>e(a.json([{id:1,name:"Option A",quantity:10,productId:1},{id:2,name:"Option B",quantity:20,productId:1}]))))],m={content:[{id:3245119,name:"[\ub2e8\ub3c5\uac01\uc778] \ud53c\ub80c\uccb4 1221 \uc5d0\ub514\uc158 \uc624\ub4dc\ucf54\ub871 50ml (13\uc885 \ud0dd1)",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240215083306_8e1db057580145829542463a84971ae3.png",price:145e3},{id:2263833,name:"\uc678\uc2dd \ud1b5\ud569\uad8c 10\ub9cc\uc6d0\uad8c",imageUrl:"https://st.kakaocdn.net/product/gift/product/20200513102805_4867c1e4a7ae43b5825e9ae14e2830e3.png",price:1e5},{id:6502823,name:"[\uc120\ubb3c\ud3ec\uc7a5/\ubbf8\ub2c8\ud37c\ud4f8\uc99d\uc815] \ub514\ucf04\ud130 \ub9ac\ub4dc \ub514\ud4e8\uc800 300ml + \uba54\uc138\uc9c0\uce74\ub4dc",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240215112140_11f857e972bc4de6ac1d2f1af47ce182.jpg",price:108e3},{id:1181831,name:"[\uc120\ubb3c\ud3ec\uc7a5] \uc18c\ubc14\uc96c \uc624 \ub4dc \ub69c\uc648\ub81b 60ML",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240214150740_ad25267defa64912a7c030a7b57dc090.jpg",price:122e3},{id:1379982,name:"[\uc815\uad00\uc7a5] \ud64d\uc0bc\uc815 \uc5d0\ube0c\ub9ac\ud0c0\uc784 \ub9ac\ubbf8\ud2f0\ub4dc (10ml x 30\ud3ec)",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240118135914_a6e1a7442ea04aa49add5e02ed62b4c3.jpg",price:133e3}],number:0,totalElements:5,size:10,last:!0},g=[n.rest.get("".concat(p.C1,"/kakao/login"),((t,e,a)=>e(a.status(200),a.json({token:"mock-kakao-token"}))))];var l=a(9482);const k=[n.rest.post("".concat(p.C1,"/api/members/register"),(async(t,e,a)=>{const{email:n,password:s}=await t.json();return n&&s?(l.$U.set({email:n,password:s}),e(a.status(201),a.json({email:n,token:"mock-token"}))):e(a.status(400),a.json({message:"Invalid input"}))}))];let f=[];const h=[n.rest.post("".concat(p.C1,"/api/wishes"),(async(t,e,a)=>{const{productId:n}=await t.json();if(n){const t={id:Date.now(),productId:n};return f.push(t),e(a.status(201),a.json(t))}return e(a.status(400),a.json({message:"Invalid input"}))})),n.rest.get("".concat(p.C1,"/api/wishes"),((t,e,a)=>{const n=f.map((t=>{const e=m.content.find((e=>e.id===t.productId));return e?{id:t.id,product:{id:e.id,name:e.name,price:e.price,imageUrl:e.imageUrl}}:null})).filter((t=>null!==t));return e(a.status(200),a.json({content:n,pageable:{sort:{sorted:!0,unsorted:!1,empty:!1},pageNumber:0,pageSize:10,offset:0,unpaged:!1,paged:!0},totalPages:1,totalElements:n.length,last:!0,number:0,size:10,numberOfElements:n.length,first:!0,empty:!1}))})),n.rest.delete("".concat(p.C1,"/api/wishes/:wishId"),((t,e,a)=>{const n=parseInt(t.params.wishId,10);return f=f.filter((t=>t.id!==n)),e(a.status(204))}))],j=(0,n.setupWorker)(...o,...u,...g,...k,...h)}}]);
//# sourceMappingURL=983.31b527ea.chunk.js.map