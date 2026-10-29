// ---- EDIT HERE ----
var INSTAGRAM_URL = ""; // paste the Instagram profile link
var WHATSAPP = "923141114864"; // orders are sent to this number
// Menu format: ["Dish", price] or ["Dish", ["Label", price], ["Label", price]] (price null = confirmed on order)
var P3 = [["Small",400],["Regular",700],["Large",900]];
var MENU = {
 veg:[
  {g:"Starters",i:[["Plain Fries",180],["Masala Fries",200],["Mayo Fries",300],["Pizza Fries",["Small",350],["Large",550]]]},
  {g:"Chinese",i:[["Veg Fried Rice",350]]},
  {g:"Pizza",n:"Classic flavour. Extra topping Rs 150.",i:[["Veg Lover",...P3]]},
  {g:"Tandoor",i:[["Chapati",20],["Paratha",100]]}
 ],
 nonveg:[
  {g:"Deals",n:"Special offers. Ask us if a deal has changed.",i:[
   ["3 Zinger Burgers with Coleslaw and Fries",1099],
   ["Tikka Leg Deal: 2 Tikka Legs, 2 Paratha, Buddy Pack Drink",750],
   ["QFM Meal Deal: Tikka Leg, Chicken Biryani, Half Malai Boti, Chutney Roll, 2 Chapati, Paratha, Buddy Pack",1250],
   ["Pizza Meal Offer: Small, Medium and Large Pizza with 1 Litre Drink",1800],
   ["QFM Special Sizzling Platter (Deal 1)",1699],
   ["Grand Family Deal",2500]]},
  {g:"Starters",n:"6 pieces",i:[["Nuggets",350],["Crispy Wings",400],["Buffalo Wings",500]]},
  {g:"Burgers",i:[["Zinger Burger",450],["Zinger Deluxe Burger",480],["QFM Zinger Deckers Burger",650],["Strip Lava Burger",700],["Chicken Burger",350],["Chicken Deluxe Burger",380],["QFM Special Chicken Cheez Burger",650],["QFM Pizza Burger",550],["Chicken Strips Burger",500],["Beef Burger",400],["Beef Deluxe Burger",440],["QFM Special Beef Cheez Burger",600],["QFM Accident Burger",650],["QFM Stuff Burger",600],["QFM American Classic Burger",650]]},
  {g:"Sandwiches",i:[["Club Sandwich",400],["B.B.Q Sandwich",450],["Crispy Sandwich",480],["Mexican Sandwich",520],["QFM Special Pizza Sandwich",580]]},
  {g:"Broast",i:[["Quarter Broast",["Leg",450],["Chest",550]],["Masala Broast",["Leg",470],["Chest",570]],["QFM Injected Broast",["Leg",550],["Chest",650]],["QFM Special Mayo Cheez Broast",["Leg",650],["Chest",700]]]},
  {g:"BBQ Tikka",i:[["Chicken Tikka",["Leg",300],["Chest",400]],["Behari Tikka",["Leg",320],["Chest",420]],["Malai Tikka",["Leg",350],["Chest",420]],["Balochi Tikka",500]]},
  {g:"BBQ Boti",n:"Per plate",i:[["Chicken Boti",400],["Chicken Behari Boti",450],["Chicken Malai Boti",450],["Rajistani Boti",500],["Beef Boti",500],["Beef Behari Boti",500]]},
  {g:"BBQ Kabab",n:"Per plate. Kabab with rice serves 2 persons.",i:[["Reshmi Kabab",450],["Chandan Kabab",500],["Seekh Kabab",450],["Gola Kabab",450],["Dhaga Kabab",450],["Turkish Kabab with Rice",900],["QFM Angara Kabab with Rice",900],["QFM Special Fry Kabab with Rice",900]]},
  {g:"Rolls",i:[["Chicken Chatni Roll",200],["Chicken Mayo Roll",220],["Chicken Malai Mayo Roll",240],["Beef Chatni Roll",220],["Beef Mayo Roll",240],["QFM Zinger Roll",350],["QFM Special Jumbo Roll",350],["QFM Special Shapatar Roll",599]]},
  {g:"Karhai",i:[["Chicken Karhai",["Half",900],["Full",1800]],["Shinwari Karhai",["Half",900],["Full",1800]],["White Karhai",["Half",1300],["Full",2400]],["Chicken Balochi Karhai",["Half",1300],["Full",2500]],["Beef Karhai",["Half",1500],["Full",2800]],["Beef Charsi Karhai",["Half",1600],["Full",3000]]]},
  {g:"Boneless Handi",i:[["Chicken Handi",["Half",1200],["Full",2400]],["White Handi",["Half",1300],["Full",2500]],["Makhni Handi",["Half",1400],["Full",2600]],["QFM Special Handi",["Half",1500],["Full",2800]]]},
  {g:"Chinese",i:[["Chicken Shashlik with Rice",750],["Manchurian with Rice",750],["Chicken Chilli Gravy with Rice",700],["Chicken Chilli Dry with Rice",650],["Chicken Chowmein",550],["Singaporean Rice",800],["Chicken Jalfrezi with Rice",750],["Dragon Chicken with Rice",750]]},
  {g:"Pizza",n:"Classic flavour. Extra topping Rs 150.",i:[["Malai Tikka",...P3],["Fajita",...P3],["B.B.Q",...P3],["Afghani Kabab",...P3]]},
  {g:"QFM Mini Daig",n:"1 kg. Comes with raita, salad and a 1 litre cold drink.",i:[["Biryani",["Chicken",2500],["Beef",3500]],["Tikka Biryani",["Chicken",2500],["Beef",3500]],["White Biryani",["Chicken",2500],["Beef",3500]],["Yakhni Pulao",["Chicken",2500],["Beef",3500]],["Afghani Pulao",["Chicken",2800],["Beef",3800]],["Hyderabadi Pulao",["Chicken",2500],["Beef",3500]]]},
  {g:"Continental",i:[["Alfredo Pasta",800],["White Sauce Pasta",600],["Red Sauce Pasta",600],["Chicken Steak",1300],["Beef Steak",1800]]},
  {g:"Platters",n:"No refilling.",i:[["QFM Couple Platter (2 persons)",1350],["QFM Friendly Platter (3 persons)",1799],["QFM Party Platter (5 persons)",2699],["QFM Family Platter (7 persons)",4299],["QFM Khandani Platter (15 persons, 1 hour order time)",11999]]}
 ],
 bev:[{g:"Cold drinks and soda",n:"Price is confirmed when we receive your order.",i:[["Soda (any flavour)",null],["Cold Drink, 1 litre",null],["Cold Drink Buddy Pack",null],["Cold Drink Jumbo Pack",null]]}]
};
// -------------------
var pages=["home","menu","about","visit"],cat="food",sub="nonveg",reg=[],cart={},lastWa="";
function $(id){return document.getElementById(id)}
function esc(s){var d=document.createElement("div");d.textContent=s==null?"":s;return d.innerHTML}
function rs(n){return "Rs "+Number(n).toLocaleString("en-US")}
function route(){
  var h=(location.hash||"#home").slice(1); if(pages.indexOf(h)<0)h="home";
  pages.forEach(function(p){$(p).classList.toggle("on",p===h)});
  document.querySelectorAll("nav a").forEach(function(a){if(a.getAttribute("href")==="#"+h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  window.scrollTo(0,0);
}
function renderMenu(){
  $("subtabs").style.display=cat==="food"?"flex":"none";
  var groups=cat==="food"?MENU[sub]:MENU.bev, n=0; reg=[];
  $("menuOut").innerHTML=groups.map(function(g){
    return '<div class="grp"><h3>'+esc(g.g)+'</h3>'+(g.n?'<small>'+esc(g.n)+'</small>':'')+'<ul class="items">'+g.i.map(function(it){
      var name=it[0],opts=it.length===2&&!Array.isArray(it[1])?[[null,it[1]]]:it.slice(1);
      var btns=opts.map(function(o){
        reg.push({name:name,label:o[0],price:o[1]});
        return '<button class="add" data-r="'+(reg.length-1)+'" aria-label="Add '+esc(name)+(o[0]?' ('+esc(o[0])+')':'')+' to your order">'+(o[0]?esc(o[0])+' ':'')+(o[1]==null?'Add':rs(o[1]))+' +</button>';
      }).join("");
      return '<li style="animation-delay:'+(n++%12)*35+'ms"><span class="nm">'+esc(name)+'</span><span class="opts">'+btns+'</span></li>';
    }).join("")+'</ul></div>';
  }).join("");
}
function totals(){var t=0,c=0,u=false;Object.keys(cart).forEach(function(k){var l=cart[k];c+=l.qty;if(l.price==null)u=true;else t+=l.price*l.qty});return{t:t,c:c,u:u}}
function renderCart(){
  var T=totals(),keys=Object.keys(cart);
  $("fabN").textContent=T.c; $("fabT").textContent=T.c?rs(T.t):"";
  $("lines").innerHTML=keys.length?keys.map(function(k){var l=cart[k];
    return '<div class="ln"><div><b>'+esc(l.name)+'</b>'+(l.label?'<span> · '+esc(l.label)+'</span>':'')+'<div class="pr">'+(l.price==null?'Price on confirmation':rs(l.price*l.qty))+'</div></div><div class="qty"><button data-q="-1" data-k="'+esc(k)+'" aria-label="Remove one">−</button><span>'+l.qty+'</span><button data-q="1" data-k="'+esc(k)+'" aria-label="Add one">+</button></div></div>';
  }).join(""):'<p class="empty">Your order is empty. Add dishes from the menu.</p>';
  $("tot").textContent=rs(T.t)+(T.u?" + drinks":"");
}
function openCart(){$("ov").hidden=false;$("drawer").hidden=false;document.body.style.overflow="hidden";$("cx").focus()}
function closeCart(){$("ov").hidden=true;$("drawer").hidden=true;document.body.style.overflow=""}
function showBill(no,when,f,T){
  var rows=Object.keys(cart).map(function(k){var l=cart[k];return '<tr><td>'+l.qty+' × '+esc(l.name)+(l.label?' ('+esc(l.label)+')':'')+'</td><td>'+(l.price==null?'To confirm':rs(l.price*l.qty))+'</td></tr>'}).join("");
  $("bill").innerHTML='<div class="rc"><h3>Qadri’s Food Mountain</h3><p class="m">Bill '+no+' · '+esc(when)+'</p><p class="m">'+esc(f.name)+' · '+esc(f.type)+(f.phone?' · '+esc(f.phone):'')+(f.addr?'<br>'+esc(f.addr):'')+'</p><table>'+rows+'</table><div class="tot"><span>Total</span><b>'+rs(T.t)+'</b></div>'+(T.u?'<p class="m">Drinks are priced when we confirm your order.</p>':'')+'<p class="m"><b>Without delivery charges.</b> Delivery charges are confirmed on WhatsApp.</p></div>';
  $("cartView").hidden=true;$("billView").hidden=false;$("wa2").href=lastWa;
}
function place(){
  var f={name:$("fn").value.trim(),type:$("ft").value,addr:$("fa").value.trim(),phone:$("fp").value.trim(),note:$("fo").value.trim()},T=totals(),err=$("err");
  if(!T.c){err.textContent="Add at least one dish to your order.";return}
  if(!f.name){err.textContent="Enter your name.";$("fn").focus();return}
  if(f.type==="Delivery"&&!f.addr){err.textContent="Enter your delivery address.";$("fa").focus();return}
  if(f.type==="Delivery"&&f.phone.replace(/\D/g,"").length<10){err.textContent="Enter a phone number for the rider.";$("fp").focus();return}
  err.textContent="";
  var no="QFM-"+String(Date.now()).slice(-6),when=new Date().toLocaleString("en-GB",{dateStyle:"medium",timeStyle:"short"});
  var msg="*New order: Qadri's Food Mountain*\nName: "+f.name+"\nOrder type: "+f.type+(f.phone?"\nPhone (for rider): "+f.phone:"")+(f.addr?"\nAddress: "+f.addr:"")+"\n\n"+
   Object.keys(cart).map(function(k){var l=cart[k];return l.qty+" x "+l.name+(l.label?" ("+l.label+")":"")}).join("\n")+
   (f.note?"\n\nNote: "+f.note:"");
  lastWa="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(msg);
  showBill(no,when,f,T);
  window.open(lastWa,"_blank","noopener");
}
document.addEventListener("click",function(e){
  var a=e.target.closest(".add");
  if(a){var r=reg[+a.dataset.r],k=r.name+"|"+(r.label||"");if(cart[k])cart[k].qty++;else cart[k]={name:r.name,label:r.label,price:r.price,qty:1};renderCart();a.classList.add("pop");setTimeout(function(){a.classList.remove("pop")},300);return}
  var q=e.target.closest("[data-q]");
  if(q){var l=cart[q.dataset.k];l.qty+=+q.dataset.q;if(l.qty<1)delete cart[q.dataset.k];renderCart()}
});
$("fab").onclick=openCart;$("cx").onclick=closeCart;$("ov").onclick=closeCart;$("place").onclick=place;
$("ft").onchange=function(){var d=this.value!=="Delivery";$("fa").parentNode.hidden=d;$("lp").hidden=d};
$("again").onclick=function(){cart={};renderCart();$("billView").hidden=true;$("cartView").hidden=false;$("fo").value="";closeCart()};
addEventListener("keydown",function(e){if(e.key==="Escape"&&!$("drawer").hidden)closeCart()});
document.querySelectorAll("[data-cat]").forEach(function(b){b.onclick=function(){cat=b.dataset.cat;document.querySelectorAll("[data-cat]").forEach(function(x){x.setAttribute("aria-selected",x===b)});renderMenu()}});
document.querySelectorAll("[data-sub]").forEach(function(b){b.onclick=function(){sub=b.dataset.sub;document.querySelectorAll("[data-sub]").forEach(function(x){x.setAttribute("aria-selected",x===b)});renderMenu()}});
document.querySelectorAll(".igbtn").forEach(function(a){
  if(INSTAGRAM_URL){a.href=INSTAGRAM_URL;a.target="_blank";a.rel="noopener"}
  else{a.setAttribute("aria-disabled","true");a.removeAttribute("href");a.textContent="Instagram link coming soon"}
});
var em=document.querySelector(".embers");
for(var i=0;i<22;i++){var s=document.createElement("i");s.style.cssText="left:"+Math.random()*100+"%;animation-duration:"+(5+Math.random()*6)+"s;animation-delay:"+Math.random()*6+"s";em.appendChild(s)}
var stage=document.querySelector(".stage"),deck=document.querySelector(".deck");
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){
  stage.addEventListener("pointermove",function(e){var r=stage.getBoundingClientRect();var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;deck.style.transform="rotateY("+(x*24)+"deg) rotateX("+(-y*14)+"deg)"});
  stage.addEventListener("pointerleave",function(){deck.style.transform=""});
}
addEventListener("hashchange",route);route();renderMenu();renderCart();
