const $=s=>document.querySelector(s);
let points=Number(localStorage.getItem("days_demo_points")||1250);
function renderPoints(){ $("#points").innerHTML=points.toLocaleString()+" <small>PTS</small>"; $("#estimate").textContent=Math.floor(points/10).toLocaleString()+" $DAYS*"; }
renderPoints();
function countdown(target,el){const d=new Date(target).getTime()-Date.now();if(d<=0){el.textContent="Milestone date reached";return;}const days=Math.floor(d/86400000),hours=Math.floor(d%86400000/3600000);el.textContent=`${days} DAYS · ${hours} HRS LEFT`;}
function updateDates(){countdown("2026-12-28T00:00:00+06:30",$("#claim-count"));countdown("2026-12-31T00:00:00+06:30",$("#listing-count"));}
updateDates();setInterval(updateDates,60000);
let toastTimer;function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2600);}
$("#wallet-btn").addEventListener("click",()=>toast("TON Connect will be enabled in the backend integration."));
$("#vip-btn").addEventListener("click",()=>toast("VIP purchase: 500 Telegram Stars · Payment integration coming in a later version."));
document.querySelectorAll("[data-task]").forEach(b=>b.addEventListener("click",()=>{const messages={wallet:"Connect TON Wallet task selected. Real verification will be added later.",channel:"Official Channel link and membership verification will be added later.",vip:"VIP mission details will be available in the next update.",follow:"Official X follow link and verification will be added later.",repost:"Official X repost link and verification will be added later."};toast(messages[b.dataset.task]);}));
document.querySelectorAll("[data-action]").forEach(b=>b.addEventListener("click",()=>toast(({mining:"Mining hub demo selected.",spin:"Free Spin demo selected.",daily:"Daily check-in demo selected.",referral:"Referral hub demo selected."})[b.dataset.action])));
