import { useState, useEffect } from "react";

const T = {
  ja: {
    nav: ["事業内容", "トレーナー", "料金プラン", "アクセス", "お問い合わせ"],
    hero_sub: "完全個室・マンツーマン指導",
    hero_h1: "身体を変えることで\n人生が変わる",
    hero_p: "神戸を拠点とするパーソナルトレーニングジム。科学的根拠に基づいたトレーニングと食事指導で、あなたの理想の身体を実現します。",
    hero_cta: "無料体験を申し込む",
    hero_sub2: "料金を見る",
    stats: [
      { num: "1対1", label: "完全マンツーマン指導" },
      { num: "0円", label: "入会金・事務手数料" },
      { num: "完全", label: "個室プライベート空間" },
      { num: "神戸", label: "駅から徒歩4分" },
    ],
    about_label: "私たちについて",
    about_h2: "10.31 合同会社とは",
    about_p1: "私は医学的知識を持ち、フィットネスの世界で10年間研鑽を積んできました。身体の仕組みを深く理解した上で、お客様一人ひとりに最適なトレーニングと栄養指導を提供します。",
    about_p2: "科学と経験に裏打ちされた指導で、あなたの身体と人生を本物から変えていきます。",
    trainer_label: "トレーナー",
    trainer_h2: "トレーナー紹介",
    trainer_name: "BATTUR DASHNYAM",
    trainer_role: "パーソナルトレーナー・代表",
    trainer_msg: "身体を変えることで人生が変わると信じています。お客様一人ひとりに寄り添い、目標達成まで全力でサポートします。まずはお気軽にご相談ください。",
    service_label: "サービス",
    service_h2: "提供内容",
    services: [
      { icon: "◈", title: "パーソナルトレーニング", desc: "お客様の目標・体力・生活スタイルに合わせたオーダーメイドのトレーニングプログラム。完全個室で安心して取り組めます。" },
      { icon: "◉", title: "食事・栄養指導", desc: "LINEを通じた食事管理サポート。リバウンドしない食習慣を一緒に作ります。極端な制限ではなく、続けられる食事が基本。" },
      { icon: "◎", title: "体組成分析", desc: "最新の体組成計で現在の身体状態をデータ化。数値で変化を実感しながらモチベーションを維持できます。" },
      { icon: "◇", title: "オンラインサポート", desc: "トレーニング日以外もLINEでの質問対応。生活の中でのちょっとした疑問にもすぐ答えます。" },
    ],
    plan_label: "料金プラン",
    plan_h2: "コース詳細",
    plan_note: "入会金 0円 ／ 事務手数料 0円",
    plans: [
      { name: "初回体験", sessions: "カウンセリング", price: "無料", tax: "", tag: null },
      { name: "体験トレーニング", sessions: "1回 75分", price: "¥2,000", tax: "税別", tag: "初回限定" },
      { name: "月10回コース", sessions: "1ヶ月", price: "¥55,000", tax: "税込", tag: "人気" },
      { name: "月12回コース", sessions: "1ヶ月", price: "¥60,000", tax: "税込", tag: null },
    ],
    flow_label: "ご利用の流れ",
    flow_h2: "お申し込みから開始まで",
    flows: [
      { title: "お問い合わせ", desc: "フォーム・LINE・お電話にてご連絡ください。" },
      { title: "カウンセリング（無料）", desc: "現在のお悩みや目標をヒアリングします。料金・内容のご説明も行います。" },
      { title: "体験トレーニング", desc: "体組成測定後、実際のパーソナルトレーニングを体験いただきます（75分・¥2,000税別）。" },
      { title: "プラン決定・開始", desc: "体験後のフィードバックをもとに最適なプランをご提案。すぐに開始できます。" },
    ],
    access_label: "アクセス",
    access_h2: "店舗情報",
    access_info: [
      { label: "所在地", value: "神戸市中央区多聞通4丁目1番11号 岡田ビル2F" },
      { label: "アクセス", value: "JR神戸駅 徒歩4分 ／ 高速神戸駅（阪神・阪急）徒歩3分" },
      { label: "営業時間", value: "7:00 〜 22:00（予約制）" },
      { label: "定休日", value: "不定休" },
      { label: "電話", value: "090-8738-9899" },
    ],
    company_label: "会社概要",
    company: [
      { label: "会社名", value: "10.31 合同会社" },
      { label: "設立", value: "2026年2月24日" },
      { label: "代表社員", value: "BATTUR DASHNYAM" },
      { label: "所在地", value: "神戸市中央区多聞通4丁目1番11号 岡田ビル2F" },
      { label: "事業内容", value: "パーソナルトレーニングジムの運営" },
    ],
    contact_label: "お問い合わせ",
    contact_h2: "まずはお気軽に",
    contact_p: "初回カウンセリングは無料です。どんな些細なことでもご相談ください。",
    form_name: "お名前",
    form_email: "メールアドレス",
    form_tel: "電話番号",
    form_msg: "お問い合わせ内容",
    form_btn: "送信する",
    sent_title: "送信完了しました",
    sent_desc: "3営業日以内にご連絡いたします。",
    lang_toggle: "モンゴル語",
  },
  mn: {
    nav: ["Үйлчилгээ", "Дасгалжуулагч", "Үнэ", "Хаяг", "Холбоо барих"],
    hero_sub: "Бүрэн хувийн өрөө · Нэг-нэгийн сургалт",
    hero_h1: "Биеэ өөрчилснөөр\nамьдрал өөрчлөгдөнө",
    hero_p: "Кобе хотод байрлах хувийн дасгалжуулалтын клуб. Шинжлэх ухааны үндэстэй сургалт болон хоолны зөвлөмжөөр таны мөрөөдлийн биеийг бүтээнэ.",
    hero_cta: "Үнэгүй туршилт захиалах",
    hero_sub2: "Үнийн мэдээлэл",
    stats: [
      { num: "1:1", label: "Бүрэн хувийн сургалт" },
      { num: "0₮", label: "Элсэлтийн хураамж" },
      { num: "Бүрэн", label: "Хувийн тусдаа өрөө" },
      { num: "Кобе", label: "Станцаас явган 4 мин" },
    ],
    about_label: "Бидний тухай",
    about_h2: "10.31 合同会社 гэж юу вэ?",
    about_p1: "Би анагаахын мэдлэгтэй бөгөөд фитнессийн чиглэлээр 10 жил хичээллэсэн туршлагатай. Биеийн бүтэц, физиологийг гүнзгий ойлгосон үндсэн дээр тус бүрийн үйлчлүүлэгчид хамгийн тохирох сургалт, хоолны зөвлөгөөг өгдөг.",
    about_p2: "Шинжлэх ухаан, туршлагад суурилсан сургалтаар таны биеийг болон амьдралыг үнэхээр өөрчилнө.",
    trainer_label: "Дасгалжуулагч",
    trainer_h2: "Дасгалжуулагчийн танилцуулга",
    trainer_name: "BATTUR DASHNYAM",
    trainer_role: "Хувийн дасгалжуулагч · Төлөөлөгч",
    trainer_msg: "Биеэ өөрчилснөөр амьдрал өөрчлөгдөнө гэдэгт итгэдэг. Тус бүрийн үйлчлүүлэгчид ойртож, зорилгод хүрэх хүртэл бүрэн дэмжлэг үзүүлнэ. Дургүйцэлгүй асуугаарай.",
    service_label: "Үйлчилгээ",
    service_h2: "Санал болгох зүйлс",
    services: [
      { icon: "◈", title: "Хувийн дасгалжуулалт", desc: "Таны зорилго, биеийн байдал, амьдралын хэв маягт тохирсон хувийн хөтөлбөр. Бүрэн хувийн өрөөнд тайвнаар дасгал хийнэ." },
      { icon: "◉", title: "Хоол тэжээлийн зөвлөгөө", desc: "LINE-ээр хоол хүнсийг хянах дэмжлэг. Буцаж таргалахгүй идэх дадалыг хамтдаа бүтээнэ." },
      { icon: "◎", title: "Биеийн шинжилгээ", desc: "Орчин үеийн аппарат ашиглан биеийн байдлыг тоогоор илэрхийлнэ. Өөрчлөлтийг мэдэрч урам зориг нэмэгдэнэ." },
      { icon: "◇", title: "Онлайн дэмжлэг", desc: "Дасгалгүй өдрүүдэд ч LINE-ээр асуулт хариулна. Өдөр тутмын жижиг асуудалд шуурхай хариу өгнө." },
    ],
    plan_label: "Үнийн мэдээлэл",
    plan_h2: "Хөтөлбөрийн дэлгэрэнгүй",
    plan_note: "Элсэлтийн хураамж 0₮ ／ Бүртгэлийн хураамж 0₮",
    plans: [
      { name: "Анхны уулзалт", sessions: "Зөвлөгөө", price: "Үнэгүй", tax: "", tag: null },
      { name: "Туршилтын сургалт", sessions: "1 удаа 75 мин", price: "¥2,000", tax: "татваргүй", tag: "Анхны удаа" },
      { name: "Сарын 10 удаа", sessions: "1 сар", price: "¥55,000", tax: "татвар орсон", tag: "Алдартай" },
      { name: "Сарын 12 удаа", sessions: "1 сар", price: "¥60,000", tax: "татвар орсон", tag: null },
    ],
    flow_label: "Дараалал",
    flow_h2: "Захиалгаас эхлэх хүртэл",
    flows: [
      { title: "Холбоо барих", desc: "Маягт, LINE, эсвэл утсаар холбоо барина уу." },
      { title: "Зөвлөгөө (үнэгүй)", desc: "Одоогийн асуудал болон зорилгоо ярилцана. Үнэ болон агуулгын тайлбар хийнэ." },
      { title: "Туршилтын сургалт", desc: "Биеийн шинжилгээний дараа жинхэнэ хувийн сургалтыг туршина (75 мин, ¥2,000 татваргүй)." },
      { title: "Хөтөлбөр тогтоох", desc: "Туршилтын дараа хамгийн тохирох хөтөлбөр санал болгоно. Шууд эхэлж болно." },
    ],
    access_label: "Хаяг",
    access_h2: "Дэлгүүрийн мэдээлэл",
    access_info: [
      { label: "Хаяг", value: "Кобе хот, Чуо-ку, Тамонцу 4-1-11, Окада билдинг 2 давхар" },
      { label: "Очих арга", value: "JR Кобе станцаас явган 4 мин / Высокоскоростной Кобе станцаас 3 мин" },
      { label: "Ажлын цаг", value: "7:00 〜 22:00 (урьдчилсан захиалгаар)" },
      { label: "Амрах өдөр", value: "Тогтмол бус" },
      { label: "Утас", value: "090-8738-9899" },
    ],
    company_label: "Компанийн мэдээлэл",
    company: [
      { label: "Компанийн нэр", value: "10.31 合同会社" },
      { label: "Байгуулагдсан", value: "2026 оны 2-р сарын 24" },
      { label: "Төлөөлөгч", value: "BATTUR DASHNYAM" },
      { label: "Хаяг", value: "Кобе хот, Чуо-ку, Тамонцу 4-1-11, Окада билдинг 2 давхар" },
      { label: "Үйл ажиллагаа", value: "Хувийн дасгалжуулалтын клубын үйл ажиллагаа" },
    ],
    contact_label: "Холбоо барих",
    contact_h2: "Дургүйцэлгүй асуугаарай",
    contact_p: "Анхны зөвлөгөө үнэгүй. Ямар ч жижиг асуудалтайгаа хандаж болно.",
    form_name: "Нэр",
    form_email: "И-мэйл",
    form_tel: "Утасны дугаар",
    form_msg: "Мессеж",
    form_btn: "Илгээх",
    sent_title: "Амжилттай илгээгдлээ",
    sent_desc: "Ажлын 3 хоногт багтаан холбоо барина.",
    lang_toggle: "日本語",
  },
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Base64 encoded trainer photo placeholder - will use URL
const TRAINER_PHOTO = "/trainer.jpg";

export default function Site1031() {
  const [lang, setLang] = useState("ja");
  const [form, setForm] = useState({ name:"", email:"", tel:"", msg:"" });
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = T[lang];
  const sections = ["service","trainer","plan","access","contact"];

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY>60);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const accent = "#C8A96E";
  const dark = "#0F1A0F";
  const mid = "#1E2E1E";

  return(
    <div style={{fontFamily:"'Hiragino Kaku Gothic Pro','Yu Gothic',sans-serif",background:"#fff",color:"#1a1a1a",lineHeight:1.75}}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        .nav-link{font-size:13px;letter-spacing:.08em;color:#333;cursor:pointer;padding:8px 14px;transition:color .2s;background:none;border:none;font-family:inherit;}
        .nav-link:hover{color:${accent};}
        .btn-primary{background:${accent};color:#fff;border:none;padding:14px 36px;font-size:14px;letter-spacing:.1em;cursor:pointer;font-family:inherit;font-weight:700;transition:opacity .2s;}
        .btn-primary:hover{opacity:.85;}
        .btn-ghost{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.5);padding:13px 32px;font-size:13px;letter-spacing:.1em;cursor:pointer;font-family:inherit;font-weight:600;transition:border-color .2s;}
        .btn-ghost:hover{border-color:#fff;}
        .section-eyebrow{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:${accent};margin-bottom:14px;font-weight:600;}
        .section-h2{font-size:clamp(26px,3.5vw,40px);font-weight:900;letter-spacing:-.02em;line-height:1.2;margin-bottom:48px;}
        .form-row{width:100%;border:1px solid #ddd;padding:13px 16px;font-size:15px;font-family:inherit;outline:none;margin-bottom:16px;transition:border-color .2s;background:#fff;}
        .form-row:focus{border-color:${accent};}
        .plan-card{border:1px solid #e5e5e5;padding:44px 32px;text-align:center;position:relative;background:#fff;transition:border-color .3s,transform .3s;}
        .plan-card:hover{border-color:${accent};transform:translateY(-4px);}
        .plan-card.featured{border-color:${accent};border-width:2px;}
        .step-dot{width:48px;height:48px;border:2px solid ${accent};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:${accent};flex-shrink:0;}
        .lang-btn{font-size:12px;cursor:pointer;padding:6px 16px;border:1px solid rgba(255,255,255,.4);background:transparent;color:rgba(255,255,255,.85);font-family:inherit;transition:all .2s;}
        .lang-btn:hover{border-color:#fff;color:#fff;}
        .lang-btn-dark{border-color:${accent};color:${accent};}
        .lang-btn-dark:hover{background:${accent};color:#fff;}
        .access-row{display:flex;gap:0;border-bottom:1px solid #eee;padding:16px 0;}
        .access-label{width:140px;font-size:13px;color:#888;flex-shrink:0;}
        .access-val{font-size:15px;color:#1a1a1a;flex:1;}
        .qr-card{background:#fff;border:1px solid #eee;padding:20px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:10px;}
        .qr-img{width:140px;height:140px;object-fit:contain;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .fadein{animation:fadeUp .8s ease forwards;}
        @media(max-width:640px){
          .plan-grid{grid-template-columns:1fr 1fr!important;}
          .service-grid{grid-template-columns:1fr!important;}
          .hero-btns{flex-direction:column!important;}
          .stat-grid{grid-template-columns:1fr 1fr!important;}
          .about-grid{grid-template-columns:1fr!important;}
          .trainer-inner{flex-direction:column!important;}
        }
      `}</style>

      {/* NAV */}
      <header style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrolled?"rgba(255,255,255,.97)":"transparent",borderBottom:scrolled?"1px solid #eee":"none",boxShadow:scrolled?"0 2px 20px rgba(0,0,0,.06)":"none",transition:"all .3s"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 32px",height:64}}>
          <div style={{fontWeight:900,fontSize:17,color:scrolled?dark:"#fff",cursor:"pointer",transition:"color .3s"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>10.31</div>
          <div style={{display:"flex",alignItems:"center",gap:4,flexWrap:"wrap"}}>
            {t.nav.map((n,i)=>(
              <button key={i} className="nav-link" style={{color:scrolled?"#333":"rgba(255,255,255,.85)"}} onClick={()=>scrollTo(sections[i])}>{n}</button>
            ))}
            <button className={`lang-btn ${scrolled?"lang-btn-dark":""}`} style={{marginLeft:12}} onClick={()=>setLang(l=>l==="ja"?"mn":"ja")}>{t.lang_toggle}</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{minHeight:"100vh",background:`linear-gradient(160deg,${dark} 0%,${mid} 55%,#1a3020 100%)`,display:"flex",alignItems:"center",position:"relative",overflow:"hidden",paddingTop:64}}>
        <div style={{position:"absolute",inset:0,opacity:.04,backgroundImage:`linear-gradient(${accent} 1px,transparent 1px),linear-gradient(90deg,${accent} 1px,transparent 1px)`,backgroundSize:"80px 80px"}} />
        <div style={{position:"absolute",top:0,left:0,width:3,height:"100%",background:`linear-gradient(to bottom,transparent,${accent},transparent)`}} />
        <div style={{maxWidth:1100,margin:"0 auto",padding:"80px 32px",position:"relative",zIndex:2}} className="fadein">
          <div style={{fontSize:12,letterSpacing:".25em",color:accent,textTransform:"uppercase",marginBottom:28,fontWeight:600}}>{t.hero_sub}</div>
          <h1 style={{fontSize:"clamp(42px,7vw,88px)",color:"#fff",fontWeight:900,lineHeight:1.1,letterSpacing:"-.03em",marginBottom:32,whiteSpace:"pre-line"}}>{t.hero_h1}</h1>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:16,maxWidth:520,marginBottom:48,lineHeight:1.85}}>{t.hero_p}</p>
          <div className="hero-btns" style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <button className="btn-primary" onClick={()=>scrollTo("contact")} style={{fontSize:15,padding:"16px 44px"}}>{t.hero_cta}</button>
            <button className="btn-ghost" onClick={()=>scrollTo("plan")}>{t.hero_sub2}</button>
          </div>
        </div>
        <div style={{position:"absolute",right:"-2%",bottom:"-5%",fontSize:"clamp(120px,20vw,260px)",fontWeight:900,color:"rgba(255,255,255,.03)",letterSpacing:"-.05em",lineHeight:1,userSelect:"none"}}>10.31</div>
      </section>

      {/* STATS */}
      <section style={{background:accent,padding:"40px 32px"}}>
        <div className="stat-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {t.stats.map((s,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{fontSize:36,fontWeight:900,color:"#fff",letterSpacing:"-.03em"}}>{s.num}</div>
              <div style={{fontSize:12,color:"rgba(255,255,255,.75)",letterSpacing:".1em",marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{padding:"100px 32px",background:"#fff"}}>
        <div className="about-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
          <div>
            <div className="section-eyebrow">{t.about_label}</div>
            <h2 className="section-h2">{t.about_h2}</h2>
            <p style={{color:"#555",marginBottom:20,fontSize:15,lineHeight:1.9}}>{t.about_p1}</p>
            <p style={{color:"#555",fontSize:15,lineHeight:1.9}}>{t.about_p2}</p>
          </div>
          <div style={{position:"relative"}}>
            <div style={{background:`linear-gradient(135deg,${dark},${mid})`,aspectRatio:"4/5",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
              <div style={{fontSize:120,opacity:.08,fontWeight:900,color:"#fff",letterSpacing:"-.05em",lineHeight:1}}>10<br/>.31</div>
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"32px",background:"linear-gradient(transparent,rgba(0,0,0,.6))"}}>
                <div style={{color:accent,fontSize:12,letterSpacing:".2em",marginBottom:6}}>EST. 2026.02.24</div>
                <div style={{color:"#fff",fontWeight:700,fontSize:16}}>KOBE, JAPAN</div>
              </div>
            </div>
            <div style={{position:"absolute",bottom:-16,right:-16,width:"60%",height:"60%",border:`2px solid ${accent}`,zIndex:-1}} />
          </div>
        </div>
      </section>

      {/* TRAINER */}
      <section id="trainer" style={{padding:"100px 32px",background:"#f8f8f6"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="section-eyebrow">{t.trainer_label}</div>
          <h2 className="section-h2">{t.trainer_h2}</h2>
          <div className="trainer-inner" style={{display:"flex",gap:48,alignItems:"center",background:"#fff",padding:"48px"}}>
            {/* TRAINER PHOTO */}
            <div style={{flexShrink:0,width:260,height:320,overflow:"hidden",position:"relative"}}>
              <img
                src="https://i.imgur.com/placeholder.jpg"
                alt="BATTUR DASHNYAM"
                style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}
                onError={e=>{
                  e.target.style.display="none";
                  e.target.nextSibling.style.display="flex";
                }}
              />
              <div style={{display:"none",width:"100%",height:"100%",background:`linear-gradient(135deg,${dark},${mid})`,alignItems:"center",justifyContent:"center",fontSize:80,position:"absolute",top:0,left:0}}>💪</div>
            </div>
            <div style={{flex:1}}>
              <div style={{fontWeight:900,fontSize:26,marginBottom:6,letterSpacing:"-.01em"}}>{t.trainer_name}</div>
              <div style={{color:accent,fontSize:13,letterSpacing:".15em",marginBottom:24,textTransform:"uppercase"}}>{t.trainer_role}</div>
              <p style={{color:"#555",fontSize:15,lineHeight:2,marginBottom:28}}>{t.trainer_msg}</p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                {["パーソナルトレーナー","栄養指導","体組成分析"].map((tag,i)=>(
                  <span key={i} style={{fontSize:12,padding:"6px 16px",border:`1px solid ${accent}`,color:accent,letterSpacing:".05em"}}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="service" style={{padding:"100px 32px",background:"#fff"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="section-eyebrow">{t.service_label}</div>
          <h2 className="section-h2">{t.service_h2}</h2>
          <div className="service-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:2}}>
            {t.services.map((s,i)=>(
              <div key={i} style={{background:"#f8f8f6",padding:"40px 36px",borderLeft:`3px solid ${i===0||i===2?accent:"transparent"}`}}>
                <div style={{fontSize:22,color:accent,marginBottom:20}}>{s.icon}</div>
                <h3 style={{fontWeight:900,fontSize:18,marginBottom:12}}>{s.title}</h3>
                <p style={{color:"#666",fontSize:14,lineHeight:1.9}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section id="plan" style={{padding:"100px 32px",background:dark}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="section-eyebrow">{t.plan_label}</div>
          <h2 className="section-h2" style={{color:"#fff"}}>{t.plan_h2}</h2>
          <div style={{background:"rgba(200,169,110,.15)",border:`1px solid ${accent}`,padding:"14px 24px",display:"inline-block",marginBottom:48}}>
            <span style={{color:accent,fontSize:13}}>🎉 {t.plan_note}</span>
          </div>
          <div className="plan-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,marginBottom:48}}>
            {t.plans.map((p,i)=>(
              <div key={i} className={`plan-card ${i===2?"featured":""}`} style={{background:i===2?"#fff":"rgba(255,255,255,.04)",borderColor:i===2?accent:"rgba(255,255,255,.1)"}}>
                {p.tag&&<div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",background:accent,color:"#fff",fontSize:11,fontWeight:900,padding:"4px 14px",whiteSpace:"nowrap"}}>{p.tag}</div>}
                <div style={{fontSize:16,fontWeight:900,marginBottom:8,color:i===2?"#1a1a1a":"#fff"}}>{p.name}</div>
                <div style={{fontSize:12,color:i===2?"#888":"rgba(255,255,255,.5)",marginBottom:20}}>{p.sessions}</div>
                <div style={{fontSize:32,fontWeight:900,color:i===2?"#1a1a1a":accent,marginBottom:4}}>{p.price}</div>
                <div style={{fontSize:12,color:i===2?"#aaa":"rgba(255,255,255,.4)",marginBottom:24}}>{p.tax}</div>
                <button className="btn-primary" onClick={()=>scrollTo("contact")} style={{width:"100%",padding:"12px",fontSize:12}}>
                  {lang==="ja"?"申し込む":"Захиалах"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section style={{padding:"100px 32px",background:"#fff"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div className="section-eyebrow">{t.flow_label}</div>
          <h2 className="section-h2">{t.flow_h2}</h2>
          {t.flows.map((f,i)=>(
            <div key={i} style={{display:"flex",gap:28,position:"relative"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div className="step-dot">{i+1}</div>
                {i<t.flows.length-1&&<div style={{width:1,flex:1,background:"#eee",margin:"8px 0"}} />}
              </div>
              <div style={{paddingBottom:i<t.flows.length-1?40:0,paddingTop:10}}>
                <div style={{fontWeight:900,fontSize:16,marginBottom:6}}>{f.title}</div>
                <div style={{color:"#666",fontSize:14,lineHeight:1.9}}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCESS */}
      <section id="access" style={{padding:"100px 32px",background:"#f8f8f6"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}}>
          <div>
            <div className="section-eyebrow">{t.access_label}</div>
            <h2 className="section-h2">{t.access_h2}</h2>
            {t.access_info.map((a,i)=>(
              <div key={i} className="access-row">
                <div className="access-label">{a.label}</div>
                <div className="access-val">{a.value}</div>
              </div>
            ))}
            <div style={{marginTop:48}}>
              <div style={{fontSize:11,letterSpacing:".2em",color:accent,marginBottom:16,textTransform:"uppercase"}}>{t.company_label}</div>
              {t.company.map((c,i)=>(
                <div key={i} className="access-row">
                  <div className="access-label">{c.label}</div>
                  <div className="access-val">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:`linear-gradient(135deg,${dark},${mid})`,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,.3)",fontSize:15,flexDirection:"column",gap:12}}>
            <div style={{fontSize:32}}>📍</div>
            <div style={{textAlign:"center",lineHeight:1.8,fontSize:13}}>
              {lang==="ja"?"神戸市中央区多聞通4丁目\n岡田ビル2F":"Кобе хот, Чуо-ку\nОкада билдинг 2 давхар"}
            </div>
            <div style={{fontSize:11,color:accent,marginTop:8,letterSpacing:".15em"}}>GOOGLE MAP</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding:"100px 32px",background:"#fff"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <div className="section-eyebrow">{t.contact_label}</div>
          <h2 className="section-h2">{t.contact_h2}</h2>
          <p style={{color:"#666",marginBottom:48,fontSize:15}}>{t.contact_p}</p>

          {/* SNS / QR */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:40}}>
            {/* LINE */}
            <div className="qr-card">
              <div style={{background:"#06C755",color:"#fff",fontWeight:900,fontSize:13,padding:"6px 16px",width:"100%",textAlign:"center"}}>LINE</div>
              <img src="/line-qr.png" alt="LINE QR" className="qr-img"
                onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block";}}
              />
              <div style={{display:"none",width:140,height:140,background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center",color:"#999",fontSize:12}}>LINE QR</div>
              <div style={{fontSize:12,color:"#888"}}>LINEで相談する</div>
            </div>
            {/* Instagram */}
            <div className="qr-card">
              <div style={{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",color:"#fff",fontWeight:900,fontSize:13,padding:"6px 16px",width:"100%",textAlign:"center"}}>Instagram</div>
              <img src="/instagram-qr.png" alt="Instagram QR" className="qr-img"
                onError={e=>{e.target.style.display="none";}}
              />
              <div style={{fontSize:12,color:"#888"}}>@THE_10.31_PERSONAL_GYM</div>
            </div>
            {/* TikTok */}
            <div className="qr-card">
              <div style={{background:"#000",color:"#fff",fontWeight:900,fontSize:13,padding:"6px 16px",width:"100%",textAlign:"center"}}>TikTok</div>
              <img src="/tiktok-qr.png" alt="TikTok QR" className="qr-img"
                onError={e=>{e.target.style.display="none";}}
              />
              <div style={{fontSize:12,color:"#888"}}>TikTokをフォロー</div>
            </div>
          </div>

          {/* TEL */}
          <div style={{background:dark,padding:"20px 32px",textAlign:"center",marginBottom:40,cursor:"pointer"}} onClick={()=>window.location.href="tel:09087389899"}>
            <div style={{color:"#fff",fontWeight:900,fontSize:18}}>📞 090-8738-9899</div>
            <div style={{color:"rgba(255,255,255,.5)",fontSize:13,marginTop:4}}>{lang==="ja"?"電話でお問い合わせ":"Утсаар холбоо барих"}</div>
          </div>

          {sent?(
            <div style={{background:"#f8f8f6",padding:48,textAlign:"center"}}>
              <div style={{fontSize:40,marginBottom:16}}>✅</div>
              <div style={{fontWeight:900,fontSize:20,marginBottom:8}}>{t.sent_title}</div>
              <div style={{color:"#888",fontSize:14}}>{t.sent_desc}</div>
            </div>
          ):(
            <div>
              <input className="form-row" placeholder={t.form_name+" *"} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
              <input className="form-row" placeholder={t.form_email+" *"} value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
              <input className="form-row" placeholder={t.form_tel} value={form.tel} onChange={e=>setForm({...form,tel:e.target.value})} />
              <textarea className="form-row" placeholder={t.form_msg} rows={5} value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} style={{resize:"vertical"}} />
              <button className="btn-primary" style={{width:"100%",padding:"16px",fontSize:15}}
                onClick={()=>{if(form.name&&form.email)setSent(true);}}>
                {t.form_btn}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:dark,padding:"48px 32px"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:24}}>
          <div>
            <div style={{fontWeight:900,fontSize:20,color:"#fff",letterSpacing:".05em",marginBottom:6}}>10.31</div>
            <div style={{color:"rgba(255,255,255,.35)",fontSize:12}}>合同会社</div>
          </div>
          <div style={{color:"rgba(255,255,255,.35)",fontSize:12}}>{t.footer_copy||"© 2026 10.31 合同会社 All rights reserved."}</div>
        </div>
      </footer>
    </div>
  );
}

