type Name = "code"|"software"|"pos"|"user"|"arrow"|"check"|"cart"|"health"|"building"|"food"|"school"|"travel"|"finance"|"leaf"|"mail"|"phone"|"pin"|"target"|"shield"|"spark"|"team"|"github";
export default function Icon({name,size=20}:{name:Name,size?:number}){
 const p={width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
 switch(name){
  case "code":return <svg {...p}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></svg>;
  case "software":return <svg {...p}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2"/></svg>;
  case "pos":return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M7 7h10M7 11h10M8 16h2M14 16h2"/></svg>;
  case "user":return <svg {...p}><circle cx="12" cy="8" r="3.5"/><path d="M5 21c.7-3.5 3-5.5 7-5.5s6.3 2 7 5.5"/></svg>;
  case "arrow":return <svg {...p}><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
  case "check":return <svg {...p}><path d="m5 12 4 4L19 6"/></svg>;
  case "cart":return <svg {...p}><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.5L21 8H7"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>;
  case "health":return <svg {...p}><path d="M12 21S4 16.5 4 10a4 4 0 0 1 8-2 4 4 0 0 1 8 2c0 6.5-8 11-8 11Z"/><path d="M8.5 11.5h2l1-2.5 1.5 5 1-2.5h2"/></svg>;
  case "building":return <svg {...p}><path d="M4 21V5l10-2v18M14 8h6v13M7 8h3M7 12h3M7 16h3M17 12h1M17 16h1"/></svg>;
  case "food":return <svg {...p}><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 3v18M17 3c3 3 3 7 0 10"/></svg>;
  case "school":return <svg {...p}><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 9v6"/></svg>;
  case "travel":return <svg {...p}><path d="m3 11 18-4-8 8-4 6-2-2 2-6-6-2Z"/></svg>;
  case "finance":return <svg {...p}><path d="M4 19V9M10 19V5M16 19v-8M22 19H2"/></svg>;
  case "leaf":return <svg {...p}><path d="M20 4C11 4 5 8 5 14c0 4 3 6 6 6 6 0 9-7 9-16Z"/><path d="M4 21c4-5 8-8 13-10"/></svg>;
  case "mail":return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
  case "phone":return <svg {...p}><path d="M6 3h3l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v3c0 1-1 2-2 2C10 20 4 14 4 5c0-1 1-2 2-2Z"/></svg>;
  case "pin":return <svg {...p}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
  case "target":return <svg {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>;
  case "shield":return <svg {...p}><path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>;
  case "spark":return <svg {...p}><path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z"/></svg>;
  case "team":return <svg {...p}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.5-3.5 2.5-5 6-5s5.5 1.5 6 5M15 15c3 0 5 1.5 5.5 5"/></svg>;
  default:return <svg {...p}><path d="M9 19c-4 1.5-4-2-5.5-2M14 22v-3.5c0-1 .1-1.5-.5-2 2.5-.3 5-1.2 5-5.5a4.3 4.3 0 0 0-1.2-3C17.6 7 18 5.7 17.2 4c0 0-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6 3.7 5 4 5 4c-.8 1.7-.4 3-.2 4a4.3 4.3 0 0 0-1.2 3c0 4.3 2.5 5.2 5 5.5-.5.5-.5 1.2-.5 2V22"/></svg>;
 }
}