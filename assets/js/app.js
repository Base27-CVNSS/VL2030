const DATA={planning:[
{code:"QH-K01",label:"Tăng trưởng GRDP bình quân",value:"> 10%",unit:"%/năm",note:"Mục tiêu kinh tế 2030"},
{code:"QH-K02",label:"GRDP bình quân đầu người",value:"169,46",unit:"triệu đồng/người",note:"Mốc năm 2030"},
{code:"QH-K03",label:"Tỷ trọng kinh tế số trong GRDP",value:"10,08%",unit:"% GRDP",note:"Giá trị tăng thêm của kinh tế số"},
{code:"QH-K04",label:"Tăng thu ngân sách",value:"7%",unit:"%/năm",note:"Tăng bình quân"},
{code:"QH-K05",label:"Năng suất lao động",value:"304,9",unit:"triệu đồng/lao động",note:"Theo giá hiện hành"},
{code:"QH-S01",label:"Chỉ số phát triển con người",value:"≈ 0,78",unit:"HDI",note:"Mục tiêu văn hóa – xã hội"},
{code:"QH-S02",label:"Nước sạch đô thị",value:"99,7%",unit:"% dân số đô thị",note:"Cấp qua hệ thống tập trung"},
{code:"QH-S03",label:"Xã đạt chuẩn nông thôn mới",value:"100%",unit:"% xã",note:"Mốc năm 2030"},
{code:"QH-E01",label:"Chất thải nguy hại được xử lý",value:"99,88%",unit:"%",note:"Thu gom và xử lý"},
{code:"QH-E02",label:"Chất thải y tế được xử lý",value:"100%",unit:"%",note:"Mốc năm 2030"},
{code:"QH-E03",label:"Rác sinh hoạt đô thị đạt chuẩn",value:"99%",unit:"%",note:"Thu gom và xử lý"},
{code:"QH-E04",label:"KCN/CCN có xử lý nước thải",value:"100%",unit:"%",note:"Đang hoạt động / mới đưa vào hoạt động"}],
pillars:[
{code:"P1",name:"Dữ liệu Không gian – Chính quyền số",desc:"Hợp nhất không gian quy hoạch, bản đồ số, dữ liệu dùng chung và điều hành dựa trên bằng chứng.",items:["GIS / WebGIS / GeoAI","Kho dữ liệu dùng chung & dữ liệu mở","Quy hoạch – đất đai – đô thị – hạ tầng","API liên thông & dashboard lãnh đạo"]},
{code:"P2",name:"AI – IoT – Tự động hóa",desc:"Tạo lớp cảm nhận, phân tích và tự động hóa cho công nghiệp, đô thị, giao thông, y tế và dịch vụ.",items:["IoT Hub & time-series","AI/GeoAI & MLOps","Camera AI / Digital Twin","Smart Industry / automation"]},
{code:"P3",name:"Nông nghiệp Tuần hoàn – Môi trường",desc:"Gắn sản xuất nông nghiệp, tài nguyên, biển và khí hậu với dữ liệu thời gian thực và chỉ tiêu xanh.",items:["Nông nghiệp thông minh","Quan trắc môi trường","Kinh tế tuần hoàn & carbon","Biển – năng lượng – thích ứng BĐKH"]}],
sectors:[
{id:"01",name:"Giáo dục & Đào tạo",desc:"STEM, kỹ năng số, hướng nghiệp công nghệ, đặt hàng nhân lực.",bt:"BT08 · BT09"},
{id:"02",name:"Văn hóa · Thể thao · Du lịch",desc:"Di sản số, công nghiệp văn hóa, du lịch thông minh, dữ liệu truyền thông.",bt:"BT04 · BT05"},
{id:"03",name:"Y tế",desc:"Hồ sơ sức khỏe, bệnh án điện tử, AI hỗ trợ quản trị và chăm sóc.",bt:"BT06"},
{id:"04",name:"Xây dựng & Hạ tầng",desc:"BIM, GIS, Digital Twin, camera AI, quản lý vận tải – công trình.",bt:"BT03 · BT06"},
{id:"05",name:"Nội vụ & Chính quyền",desc:"Chính quyền số hai cấp, quy trình số, năng lực dữ liệu – AI.",bt:"BT06 · BT09"},
{id:"06",name:"Công Thương",desc:"Công nghiệp chế biến, nhà máy thông minh, năng lượng, logistics, TMĐT.",bt:"BT03 · BT07"},
{id:"07",name:"Khoa học & Công nghệ",desc:"Đổi mới sáng tạo, R&D, dữ liệu nghiên cứu, phòng thí nghiệm, startup.",bt:"BT01 · BT02 · BT08"},
{id:"08",name:"Nông nghiệp & Môi trường",desc:"Chuỗi giá trị nông sản, tài nguyên, quan trắc, tuần hoàn, giảm phát thải.",bt:"BT01 · BT06 · BT09"}],
problems:[
{id:"BT01",name:"R&D & hỗ trợ doanh nghiệp nghiên cứu phát triển",pillars:["P1","P2","P3"],desc:"Cơ chế và hạ tầng giúp doanh nghiệp đầu tư R&D, làm chủ công nghệ và chuyển đổi số.",deliverable:"Quỹ/chương trình R&D · sandbox thử nghiệm · danh mục nhiệm vụ có doanh nghiệp đồng hành",space:"Vùng 1 · Vùng 2 · vùng nguyên liệu",metric:"Tỷ lệ nhiệm vụ R&D có ứng dụng / thương mại hóa",result:"Tăng năng suất, công nghệ và giá trị gia tăng."},
{id:"BT02",name:"Trung tâm Đổi mới Sáng tạo tỉnh",pillars:["P1","P2"],desc:"Cầu nối doanh nghiệp – viện trường – chuyên gia, ươm tạo và thử nghiệm công nghệ.",deliverable:"Innovation Hub · co-lab · expert network · innovation portfolio",space:"Vùng 2 · trung tâm đô thị",metric:"Số bài toán / dự án đổi mới sáng tạo được chuyển giao",result:"Hình thành hệ sinh thái đổi mới sáng tạo có đầu ra."},
{id:"BT03",name:"Khu công nghiệp công nghệ số",pillars:["P2"],desc:"Sản xuất thông minh, IoT, AI, robot và quản trị năng lượng trong KCN/CCN.",deliverable:"Smart factory reference · industrial IoT · energy dashboard",space:"Vùng 2 · Vùng 3 · hành lang B–N",metric:"Tỷ lệ DN/KCN áp dụng nền tảng sản xuất số",result:"Nâng hiệu suất, chất lượng và năng lực cạnh tranh công nghiệp."},
{id:"BT04",name:"Trung tâm dữ liệu Báo & Đài PTTH",pillars:["P1","P2"],desc:"Kho nội dung số có metadata, tìm kiếm AI, lưu trữ lâu dài và phân phối đa nền tảng.",deliverable:"Media data lake · DAM · search AI · archive policy",space:"Toàn tỉnh",metric:"Tỷ lệ tài sản truyền thông được số hóa / gắn metadata",result:"Khai thác lại nội dung nhanh, an toàn, nhất quán."},
{id:"BT05",name:"Công nghiệp Văn hóa – Du lịch – Truyền hình",pillars:["P1","P2"],desc:"Số hóa di sản, WebGIS du lịch, nội dung số và trải nghiệm đa kênh.",deliverable:"CSDL di sản · tourism WebGIS · digital content catalog",space:"Vùng 1 · Vùng 3 · hành lang sinh thái",metric:"Số tài sản văn hóa/điểm đến được số hóa và khai thác",result:"Tăng khả năng tiếp cận, quảng bá và tạo sản phẩm du lịch mới."},
{id:"BT06",name:"Hạ tầng số – Dữ liệu số dùng chung",pillars:["P1","P2","P3"],desc:"Nền tảng tích hợp dữ liệu tỉnh, GIS, IoT, API, cloud và an toàn thông tin.",deliverable:"Data catalog · lakehouse · GIS core · API gateway · IOC",space:"Toàn tỉnh · mọi vùng/hành lang",metric:"Coverage dữ liệu dùng chung · API uptime · data quality",result:"Một nguồn dữ liệu tin cậy cho quản trị và dịch vụ công."},
{id:"BT07",name:"Hỗ trợ doanh nghiệp chuyển đổi số",pillars:["P2"],desc:"Nâng năng suất, quản trị số, thương mại điện tử, thanh toán số và logistics.",deliverable:"SME digital toolkit · maturity assessment · marketplace integration",space:"Vùng 1 · Vùng 2 · hành lang kinh tế",metric:"Tỷ lệ DN đạt mức trưởng thành số mục tiêu",result:"Giảm chi phí, tăng doanh thu và khả năng tiếp cận thị trường."},
{id:"BT08",name:"Khởi nghiệp – ĐMST – Phòng thí nghiệm",pillars:["P2","P3"],desc:"Phòng thí nghiệm công nghệ sinh học, vật liệu mới, AI; nhóm nghiên cứu mạnh và startup.",deliverable:"Shared labs · startup pipeline · research groups",space:"Vùng 2 · các cơ sở đào tạo",metric:"Số startup / prototype / công nghệ được ươm tạo",result:"Tạo nguồn công nghệ và doanh nghiệp mới cho tỉnh."},
{id:"BT09",name:"Đào tạo nhân lực KHCN – ĐMST – CĐS",pillars:["P1","P2","P3"],desc:"Đào tạo kỹ năng AI, IoT, cloud, dữ liệu, tự động hóa và công nghệ cho các ngành mũi nhọn.",deliverable:"Competency framework · micro-credentials · lab STEM · đặt hàng đào tạo",space:"Toàn tỉnh",metric:"Số người hoàn thành chuẩn năng lực / tỷ lệ có việc làm phù hợp",result:"Nguồn nhân lực đủ năng lực vận hành mô hình tăng trưởng mới."}],
layers:[
{code:"L6",name:"Bài toán lớn – Portfolio",desc:"Danh mục chương trình / dự án gắn mục tiêu, owner, KPI, ngân sách và tiến độ."},
{code:"L5",name:"Tương tác – Cổng dịch vụ",desc:"Dashboard, WebGIS, ứng dụng, cổng dịch vụ, open data, API công khai."},
{code:"L4",name:"Ứng dụng ngành",desc:"8 lĩnh vực nghiệp vụ; ưu tiên dùng chung identity, map, data, notification, analytics."},
{code:"L3",name:"Trí tuệ",desc:"BI, AI, GeoAI, dự báo, tối ưu, Digital Twin, model registry và MLOps."},
{code:"L2",name:"Tích hợp dùng chung",desc:"API Gateway, workflow, message bus, IoT Hub, GIS services, master data."},
{code:"L1",name:"Dữ liệu",desc:"Lakehouse, PostGIS, time-series, object storage, metadata/catalog, data quality."},
{code:"L0",name:"Hạ tầng số",desc:"Cloud/hybrid, edge, 5G, IoT, camera, UAV/vệ tinh, trung tâm dữ liệu, DR."},
{code:"XS",name:"Xuyên suốt: quản trị – an toàn – tiêu chuẩn",desc:"IAM, cyber security, privacy, audit, architecture governance, data governance, observability.",cross:true}],
dataKpis:[
{name:"Độ phủ Data Catalog",target:"≥ 95%",desc:"Tập dữ liệu trọng yếu có owner, metadata, phân loại và lịch cập nhật."},
{name:"Tỷ lệ API hóa dữ liệu dùng chung",target:"≥ 80%",desc:"Data product trọng yếu có API/OGC API hoặc dịch vụ truy cập chuẩn."},
{name:"Tính sẵn sàng API/GIS lõi",target:"≥ 99,9%",desc:"Availability theo tháng, loại trừ bảo trì được phê duyệt."},
{name:"Độ đầy đủ dữ liệu",target:"≥ 98%",desc:"Tỷ lệ trường bắt buộc có giá trị hợp lệ trên tập dữ liệu trọng yếu."},
{name:"Độ hợp lệ không gian",target:"≥ 99%",desc:"Geometry valid, đúng CRS/extent/topology theo rule nghiệp vụ."},
{name:"Độ trễ dữ liệu IOC",target:"≤ SLA",desc:"Từ thời điểm phát sinh đến khi khả dụng cho chỉ số điều hành."},
{name:"Truy vết nguồn gốc",target:"100% KPI",desc:"Mỗi KPI truy ngược được dataset, phiên bản, công thức và owner."},
{name:"Bao phủ phân loại an toàn",target:"100%",desc:"Dữ liệu/hệ thống trọng yếu có phân loại và control tương ứng."}],
ioc:[
{label:"GRDP bình quân",value:"N/A",target:"Mục tiêu: >10%/năm"},
{label:"Kinh tế số / GRDP",value:"N/A",target:"Mục tiêu 2030: 10,08%"},
{label:"Năng suất lao động",value:"N/A",target:"Mục tiêu: 304,9 trđ/LĐ"},
{label:"Nước sạch đô thị",value:"N/A",target:"Mục tiêu: 99,7%"},
{label:"Xử lý CT nguy hại",value:"N/A",target:"Mục tiêu: 99,88%"},
{label:"KCN/CCN xử lý nước thải",value:"N/A",target:"Mục tiêu: 100%"},
{label:"Data catalog coverage",value:"N/A",target:"Đề xuất: ≥95%"},
{label:"API/GIS core availability",value:"N/A",target:"Đề xuất: ≥99,9%"}],
kpis:[
{id:"QH-K01",type:"QH",name:"Tăng trưởng GRDP bình quân",formula:"CAGR GRDP thực tế theo giai đoạn quy hoạch",unit:"%/năm",target:">10%",freq:"Quý / Năm",source:"Cơ quan thống kê / dữ liệu KT-XH",result:"Duy trì tăng trưởng nhanh và bền vững."},
{id:"QH-K02",type:"QH",name:"GRDP bình quân đầu người",formula:"GRDP / dân số trung bình",unit:"triệu đồng/người",target:"169,46",freq:"Năm",source:"Thống kê KT-XH",result:"Nâng mức thu nhập và năng lực kinh tế bình quân."},
{id:"QH-K03",type:"QH",name:"Tỷ trọng giá trị tăng thêm kinh tế số",formula:"VA kinh tế số / GRDP × 100",unit:"%",target:"10,08%",freq:"Năm",source:"Thống kê + dữ liệu kinh tế số",result:"Kinh tế số trở thành cấu phần tăng trưởng có thể đo."},
{id:"QH-K04",type:"QH",name:"Tăng thu ngân sách trên địa bàn",formula:"Tốc độ tăng thu bình quân",unit:"%/năm",target:"7%",freq:"Tháng / Quý",source:"Tài chính – ngân sách",result:"Tăng dư địa tài khóa cho đầu tư phát triển."},
{id:"QH-S01",type:"QH",name:"HDI",formula:"Chỉ số phát triển con người theo phương pháp thống kê",unit:"điểm",target:"≈0,78",freq:"Năm",source:"Thống kê xã hội",result:"Cân bằng tăng trưởng với chất lượng phát triển con người."},
{id:"QH-S02",type:"QH",name:"Nước sạch đô thị",formula:"Dân số đô thị được cấp nước sạch tập trung / dân số đô thị",unit:"%",target:"99,7%",freq:"Quý",source:"Cấp nước + địa phương",result:"Tiếp cận nước sạch gần như toàn bộ khu vực đô thị."},
{id:"QH-E01",type:"QH",name:"Chất thải nguy hại được thu gom, xử lý",formula:"Khối lượng xử lý đạt chuẩn / tổng phát sinh",unit:"%",target:"99,88%",freq:"Tháng / Quý",source:"Môi trường",result:"Giảm rủi ro ô nhiễm từ chất thải nguy hại."},
{id:"QH-E02",type:"QH",name:"KCN/CCN có hệ thống xử lý nước thải",formula:"Số KCN/CCN đạt yêu cầu / tổng đang hoạt động",unit:"%",target:"100%",freq:"Quý",source:"Công Thương / Môi trường",result:"Kiểm soát nước thải công nghiệp theo chuẩn."},
{id:"DX-D01",type:"ĐX",name:"Độ phủ Data Catalog",formula:"Dataset trọng yếu đủ metadata / tổng dataset trọng yếu",unit:"%",target:"≥95%",freq:"Tháng",source:"Data Office / Sở ngành",result:"Biết dữ liệu ở đâu, ai sở hữu, dùng thế nào."},
{id:"DX-D02",type:"ĐX",name:"Độ đầy đủ dữ liệu",formula:"Trường bắt buộc có giá trị hợp lệ / tổng trường bắt buộc",unit:"%",target:"≥98%",freq:"Ngày / Tuần",source:"Data quality engine",result:"Giảm lỗi phân tích và quyết định sai do thiếu dữ liệu."},
{id:"DX-D03",type:"ĐX",name:"Tỷ lệ KPI có lineage",formula:"KPI truy vết được nguồn+formula+version / tổng KPI IOC",unit:"%",target:"100%",freq:"Theo release",source:"KPI Registry / Data Catalog",result:"Mọi con số trên IOC có thể kiểm chứng."},
{id:"DX-P01",type:"ĐX",name:"API/GIS core availability",formula:"Uptime dịch vụ lõi / tổng thời gian theo SLA",unit:"%",target:"≥99,9%",freq:"Phút / Tháng",source:"Observability platform",result:"Hạ tầng dùng chung ổn định cho toàn tỉnh."},
{id:"DX-I01",type:"ĐX",name:"Độ trễ chỉ số IOC",formula:"Thời điểm IOC sẵn sàng – thời điểm dữ liệu phát sinh",unit:"phút/giờ",target:"≤ SLA từng chỉ số",freq:"Liên tục",source:"Streaming/ETL monitoring",result:"Lãnh đạo biết chỉ số nào thực sự gần thời gian thực."},
{id:"DX-B01",type:"ĐX",name:"Tỷ lệ bài toán có KPI outcome",formula:"BT có ≥1 KPI kết quả / 9 bài toán",unit:"%",target:"100%",freq:"Quý",source:"Portfolio Office",result:"Dự án công nghệ được đánh giá bằng tác động, không chỉ đầu ra."}]};

const $=s=>document.querySelector(s);
const el=(tag,cls,html)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(html!==undefined)n.innerHTML=html;return n};
function renderPlanning(){const root=$("#planningCards");DATA.planning.forEach(m=>root.appendChild(el("article","metric-card",'<div class="meta"><span class="tag official">QH</span><span class="code">'+m.code+'</span></div><strong>'+m.value+'</strong><h4>'+m.label+'</h4><p>'+m.unit+' · '+m.note+'</p>')))}
function renderPillars(){const root=$("#pillarGrid");DATA.pillars.forEach((p,i)=>{const c=el("article","pillar-card",'<div class="num">TRỤ CỘT 0'+(i+1)+' · '+p.code+'</div><h3>'+p.name+'</h3><p>'+p.desc+'</p><ul>'+p.items.map(x=>'<li>'+x+'</li>').join("")+'</ul>');c.dataset.code=p.code;root.appendChild(c)})}
function renderSectors(){const root=$("#sectorGrid");DATA.sectors.forEach(s=>root.appendChild(el("article","sector-card",'<div class="id">'+s.id+'</div><h3>'+s.name+'</h3><p>'+s.desc+'</p><div class="links">'+s.bt+'</div>')))}
function renderProblems(filter="all"){const root=$("#problemGrid");root.innerHTML="";DATA.problems.filter(p=>filter==="all"||p.pillars.includes(filter)).forEach(p=>root.appendChild(el("article","problem-card",'<div class="top"><span class="bt">'+p.id+'</span><span class="pillars">'+p.pillars.join(" · ")+'</span></div><h3>'+p.name+'</h3><p>'+p.desc+'</p><div class="deliverable"><b>Sản phẩm:</b> '+p.deliverable+'</div>')))}
function renderMatrix(){const root=$("#matrixBody");DATA.problems.forEach(p=>root.appendChild(el("tr","",'<td>'+p.id+'</td><td>'+p.name+'</td><td>'+p.pillars.join(" · ")+'</td><td>'+p.space+'</td><td>'+p.metric+'</td><td>'+p.result+'</td>')))}
function renderLayers(){const root=$("#architectureLayers");DATA.layers.forEach(l=>root.appendChild(el("article","arch-layer"+(l.cross?" cross":""),'<div class="code">'+l.code+'</div><h3>'+l.name+'</h3><p>'+l.desc+'</p>')))}
function renderDataKpis(){const root=$("#dataKpis");DATA.dataKpis.forEach(k=>root.appendChild(el("article","ops-card",'<div class="op-head"><h4>'+k.name+'</h4><span class="tag proposed">ĐX</span></div><strong>'+k.target+'</strong><p>'+k.desc+'</p>')))}
function renderIoc(){const root=$("#iocGrid");DATA.ioc.forEach(k=>root.appendChild(el("article","ioc-card",'<div class="label">'+k.label+'</div><strong>'+k.value+'</strong><div class="target">'+k.target+'</div><div class="status"><i></i></div>')))}
function renderKpis(filter="all"){const root=$("#kpiBody");root.innerHTML="";DATA.kpis.filter(k=>filter==="all"||k.type===filter).forEach(k=>{const tag=k.type==="QH"?"official":"proposed";root.appendChild(el("tr","",'<td><span class="tag '+tag+'">'+k.type+'</span> '+k.id+'</td><td>'+k.name+'</td><td>'+k.formula+'</td><td>'+k.unit+'</td><td><b>'+k.target+'</b></td><td>'+k.freq+'</td><td>'+k.source+'</td><td>'+k.result+'</td>'))})}

function formatVi(n){return new Intl.NumberFormat("vi-VN",{maximumFractionDigits:2}).format(n)}
function barChartHTML(rows,max=100,extraClass=""){
  return '<div class="hbar-chart '+extraClass+'">'+rows.map(function(r){
    const width=Math.max(0,Math.min(100,(r.value/max)*100));
    return '<div class="hbar-row"><div class="hbar-label">'+r.label+'</div><div class="hbar-track" title="'+r.label+': '+formatVi(r.value)+(r.suffix||"")+'"><div class="hbar-fill" style="--w:'+width+'%"></div></div><div class="hbar-value">'+formatVi(r.value)+(r.suffix||"")+'</div></div>';
  }).join("")+(extraClass?"":'<div class="hbar-scale"><span></span><div><span>0</span><span>25</span><span>50</span><span>75</span><span>100%</span></div><span></span></div>')+'</div>';
}
function renderCharts(){
  const targets=[
    {label:"Kinh tế số / GRDP",value:10.08,suffix:"%"},
    {label:"Tăng thu ngân sách",value:7,suffix:"%"},
    {label:"Nước sạch đô thị",value:99.7,suffix:"%"},
    {label:"Xã đạt chuẩn nông thôn mới",value:100,suffix:"%"},
    {label:"Chất thải nguy hại được xử lý",value:99.88,suffix:"%"},
    {label:"Chất thải y tế được xử lý",value:100,suffix:"%"},
    {label:"Rác sinh hoạt đô thị đạt chuẩn",value:99,suffix:"%"},
    {label:"KCN/CCN có xử lý nước thải",value:100,suffix:"%"}
  ];
  const targetRoot=$("#chartTargets");
  if(targetRoot) targetRoot.innerHTML=barChartHTML(targets,100)+'<div class="chart-note">Nguồn: các mục tiêu QH đang sử dụng trong dashboard. Biểu đồ chỉ gồm chỉ tiêu có cùng đơn vị %.</div>';

  const pillarRows=DATA.pillars.map(function(p){
    return {code:p.code,label:p.name,value:DATA.problems.filter(function(bt){return bt.pillars.includes(p.code)}).length};
  });
  const pillarMax=Math.max.apply(null,pillarRows.map(function(x){return x.value}).concat([1]));
  const pillarRoot=$("#chartPillars");
  if(pillarRoot) pillarRoot.innerHTML='<div class="column-chart">'+pillarRows.map(function(p){
    return '<div class="column-item" title="'+p.label+' · '+p.value+' liên kết"><div class="column-value">'+p.value+'</div><div class="column-bar-wrap"><div class="column-bar" style="--h:'+((p.value/pillarMax)*100)+'%"></div></div><div class="column-label">'+p.code+'</div><div class="column-sub">'+p.value+' / 9 bài toán</div></div>';
  }).join("")+'</div><div class="chart-note">P1: dữ liệu không gian · P2: AI–IoT · P3: nông nghiệp tuần hoàn. Một BT có thể xuất hiện ở nhiều trụ cột.</div>';

  const sectorRows=DATA.sectors.map(function(sec){
    return {label:sec.id+" · "+sec.name,value:sec.bt.split("·").map(function(x){return x.trim()}).filter(Boolean).length,suffix:""};
  });
  const sectorMax=Math.max.apply(null,sectorRows.map(function(x){return x.value}).concat([1]));
  const sectorRoot=$("#chartSectors");
  if(sectorRoot) sectorRoot.innerHTML=barChartHTML(sectorRows,sectorMax,"sector-bars")+'<div class="chart-note">Đơn vị: số bài toán được liên kết trong khung hiện tại.</div>';
}
function normalizeUnicodeNFC(root=document.body){
  if(!root||typeof "".normalize!=="function") return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())) node.nodeValue=node.nodeValue.normalize("NFC");
  document.title=document.title.normalize("NFC");
  document.querySelectorAll("[aria-label],[title]").forEach(function(n){
    ["aria-label","title"].forEach(function(a){const v=n.getAttribute(a);if(v)n.setAttribute(a,v.normalize("NFC"))});
  });
}

renderPlanning();renderPillars();renderSectors();renderProblems();renderMatrix();renderLayers();renderDataKpis();renderIoc();renderKpis();renderCharts();normalizeUnicodeNFC();
$("#pillarFilter").addEventListener("change",e=>renderProblems(e.target.value));$("#kpiFilter").addEventListener("change",e=>renderKpis(e.target.value));
const menu=$(".menu-btn"),nav=$(".nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});nav.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")});
const links=[...document.querySelectorAll(".nav a")],sections=links.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id))})},{rootMargin:"-20% 0px -70% 0px",threshold:0});sections.forEach(s=>observer.observe(s));