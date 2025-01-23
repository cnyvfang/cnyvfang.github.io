---
permalink: /
title: "Chengyu Fang - Homepage"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# ☕️ About Me

I am a first-year master student at Institute of Data and Information, Tsinghua University, under the supervision of <a href="https://scholar.google.com/citations?user=Xrh1OIUAAAAJ&amp;hl=en">Prof. Xiu Li</a>.
Previously, I obtained my B.Eng in Software Engineering at School of Computer and Information Science & School of Software Engineering, Southwest University in 2024.

My research interests include **Low-level Vision**, **Medical Image Analysis** and **Camouflaged Object Segmentation**. 

<span style="color:PaleVioletRed;">I am actively seeking for research internship opportunities in either academia or industry, please feel free to contact me via email.

# 🔥 News
- *2025.01*: &nbsp; Two papers accepted to ICLR 2025.
- *2024.12*: &nbsp; One paper accepted to AAAI 2025, Congrats to Chenyang.
- *2024.09*: &nbsp; One paper accepted to NeurIPS 2024 as a **Spotlight Paper**.
- *2024.06*: &nbsp; I graduated from Southwest University and received the honor of "Southwest University Outstanding Student Representative".
- *2024.02*: &nbsp; One paper accepted to CVPR 2024, Congrats to Yuelin.
- *2023.04*: &nbsp; One paper accepted to ICMR 2023.

# 📝 Selected Publications 

_$^{\*}$ Equal contribution, $^{\dagger}$ Corresponding author_

## Recommendation

<div class='paper-box' style="margin-top: -20px"><div class='paper-box-image'><div><div class="badge">NeurIPS 2024 Spotlight⭐️</div><img src='images/images/publication/corun.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Real-world Image Dehazing with Coherence-based Pseudo Labeling and Cooperative Unfolding Network](https://arxiv.org/pdf/2406.07966)

<span style="color:PaleVioletRed;">Chenyu Fang$^{\*}$</span>, Chunming He$^{\*}$†, Fengyang Xiao, Yulun Zhang$^{\dagger}$, Longxiang Tang, Yuelin Zhang, Kai Li, and Xiu Li$^{\dagger}$

[PDF](https://arxiv.org/pdf/2406.07966) [Code](https://github.com/cnyvfang/CORUN-Colabator) [Slides](https://drive.google.com/file/d/1KgPnSNQYnRfCGP24N67w_eTFBsJD0iSf/view?usp=sharing) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- The cooperative unfolding network (CORUN) and the first plug-in-play iterative mean-teacher framework (Colabator) for real-world image dehazing.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/images/publication/reti-diff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Reti-Diff: Illumination Degradation Image Restoration with Retinex-based Latent Diffusion Model](https://arxiv.org/abs/2311.11638)

Chunming He$^{\*}$, <span style="color:PaleVioletRed;">Chenyu Fang$^{\*}$$^{\dagger}$</span>, Yulun Zhang$^{\dagger}$, Kai Li, Longxiang Tang, Chengyu You, Fengyang Xiao, Zhenhua Guo, Xiu Li$^{\dagger}$ and Sina Farsiu

[PDF](https://arxiv.org/abs/2311.11638) [Code](https://github.com/ChunmingHe/Reti-Diff)
<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- The first latent diffusion model-based methods with strong generalizability in illumination degradation image restoration problems and promising performance in downstream tasks.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/images/publication/llv_survey.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Diffusion Models in Low-Level Vision: A Survey](https://arxiv.org/abs/2406.111386)

Chunming He$^{\*}$$^{\dagger}$, Yuqi Shen$^{\*}$, <span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Fengyang Xiao, Longxiang Tang, Yulun Zhang, Wangmeng Zuo, Zhenhua Guo, Xiu Li$^{\dagger}$

[PDF](https://arxiv.org/abs/2406.111386) [Awesome List](https://github.com/ChunmingHe/awesome-diffusion-models-in-low-level-vision)
<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A curated list of awesome Diffusion Models(DMs) in low-level vision.
</div>
</div>

## More Under Review
- Motion-Guided Dual-Camera Tracker for Endoscope Tracking and Motion Analysis in a Mechanical Gastric Simulator, **arXiv 2024** [[PDF]](https://arxiv.org/pdf/2403.05146)
  <br>Yuelin Zhang, Kim Yan, Chun Ping Lam, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Wenxuan Xie, Yufu Qiu, Raymond Shing-Yan Tang, Shing Shin Cheng$^{\dagger}$

## More Accepted Papers

[//]: # (- Reti-Diff: Illumination Degradation Image Restoration with Retinex-based Latent Diffusion Model, **ICLR 2025** [[PDF]]&#40;https://arxiv.org/abs/2311.11638&#41; [[Code]]&#40;https://github.com/ChunmingHe/Reti-Diff&#41;)

[//]: # (  <br>Chunming He\*, <span style="color:PaleVioletRed;">Chenyu Fang\*$^{\dagger}$</span>, Yulun Zhang$^{\dagger}$, Kai Li, Longxiang Tang, Chengyu You, Fengyang Xiao, Zhenhua Guo, Xiu Li$^{\dagger}$ and Sina Farsiu)

[//]: # (- Real-world Image Dehazing with Coherence-based Pseudo Labeling and Cooperative Unfolding Network, **NeurIPS 2024, Spotlight⭐️** [[PDF]]&#40;https://arxiv.org/pdf/2406.07966&#41; [[Code]]&#40;https://github.com/cnyvfang/CORUN-Colabator&#41; [[Slides]]&#40;https://drive.google.com/file/d/1KgPnSNQYnRfCGP24N67w_eTFBsJD0iSf/view?usp=sharing&#41;)

[//]: # (  <br><span style="color:PaleVioletRed;">Chenyu Fang\*</span>, Chunming He\*$^{\dagger}$, Fengyang Xiao, Yulun Zhang$^{\dagger}$, Longxiang Tang, Yuelin Zhang, Kai Li, and Xiu Li$^{\dagger}$)
- Instantswap: Fast customized concept swapping across sharp shape differences, **ICLR 2025** [[PDF]](https://arxiv.org/pdf/2412.01197) [[Code]](https://instantswap.github.io/)
  <br>Chenyang Zhu$^{\*}$, Kai Li$^{\*}$$^{\dagger}$, Yue Ma*, Longxiang Tang, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Chubin Chen, Qifeng Chen, Xiu Li$^{\dagger}$
- A Survey of Camouflaged Object Detection and Beyond, **CAAI AIR 2024** [[PDF]](https://www.arxiv.org/abs/2408.14562) [[Awesome List]](https://github.com/ChunmingHe/awesome-concealed-object-segmentation)
  <br>Fengyang Xiao$^{\*}$, Sujie Hu$^{\*}$, Yuqi Shen, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Jinfa Huang, Chunming He$^{\dagger}$, Longxiang Tang, Ziyun Yang, Xiu Li$^{\dagger}$
- A Unified Framework for Microscopy Defocus Deblur with Multi-Pyramid Transformer and Contrastive Learning, **CVPR 2024** [[PDF]](https://arxiv.org/pdf/2403.02611) [[Code]](https://github.com/PieceZhang/MPT-CataBlur/)
  <br>Yuelin Zhang, Pengyu Zheng, Wanquan Yan, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Shing Shin Cheng$^{\dagger}$
- Joint Geometric-Semantic Driven Character Line Drawing Generation, **ICMR 2023** [[PDF]](https://dl.acm.org/doi/10.1145/3591106.3592216) [[Code]](https://github.com/cnyvfang/P2LDGAN/)
  <br><span style="color:PaleVioletRed;">Chengyu Fang</span>, Xianfeng Han$^{\dagger}$


# 🎖 Honors and Awards
- *2024.06* Chongqing Outstanding Graduates
- *2024.04* Chongqing Merit Student
- *2023.12* Southwest University Outstanding Student Representative (15/University Students)
- *2023.04* Chongqing Advanced Individual for Innovation Capability


# 📃 Scholarships

- *2023.12* National Scholarship
- *2022.12* National Scholarship
- *2023.12* Xiaomi Corporation Special Scholarship (7/University Students)
- *2023.12* Southwest University Special Scholarship (15/University Students)
- *2022.07* Professor Qiu Yuhui Scholarship (5/Department Students)
- *2022.07* Pisen Electronics Co. Ltd Scholarship (5/Department Students)
- *2021.10* Southwest University First Prize Scholarship

# 📖 Teaching

- *2023.09 - 2024.01 & 2024.09 - 2025.01*, Teaching Assistant for Frontiers of AI technology and industrial applications, Tsinghua University.

[//]: # ()
[//]: # (# 💬 Invited Talks)

[//]: # (- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[//]: # (- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]]&#40;https://github.com/&#41;)

# 💻 Internships
- *2023.07 - 2024.08*, Professor Li Xiu’s [research group](https://thusigsclub.github.io/thu.github.io/index.html) at Tsinghua University, Shen Zhen, China.

# 🏁 Competition

- *2023.08* 🏅1st Prize of "Texas Instruments Cup" 2023 National Undergraduate Electronic Design Contest
- *2023.08* 🏅1st Prize of "China Software Cup" University Student Software Design Competition
- *2023.08* 🏅1st Prize of "China University Student Embedded Chip and System Design Competition
- *2023.04* 🏅1st Prize of 2023 China University Robot Competition (RoboMaster)
- *2022.08* 🏅️1st Prize of "China Software Cup" University Student Software Design Competition
- *2022.12* 🏅1st Prize of 2022 China University Robot Competition (RoboMaster)
- *2023.06* 🥈2nd Prize in China Robotics and Artificial Intelligence Competition
- *2022.08* 🥈2nd Prize of "China Software Cup" University Student Software Design Competition
- *2022.06* 🥈2nd Prize of 2022 China University Robot Competition (RoboMaster)
- *2023.08* 🥉3rd Prize in Chinese Collegiate Computing Competition

# 🧑‍🤝‍🧑 My Friends and Collaborators
- <a href="https://chunminghe.github.io">Chunming He</a>@Duke,  <a href="https://scholar.google.com/citations?hl=en&user=3oMQsq8AAAAJ">Longxiang Tang</a>@Tsinghua,  <a href="https://scholar.google.com/citations?user=Q5DbNDoAAAAJ&hl=en">Yuelin Zhang</a>@CUHK, [Dr. Yulun Zhang](https://yulunzhang.com)@SJTU, [Dr. Kai Li](http://kailigo.github.io/)@Meta.



---



<script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=080808&w=300&t=tt&d=UaEZ9aWqtuSiJ8XwjZ5AvyTi6KONBoibOX0doG1dnSQ&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080"></script>