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
Currently, I am conducting research on Medical AI and Multimodal Large Language Models at the Alibaba DAMO Academy as a research intern.

My research interests include **Real World Oriented Computer Vision**, **Medical AI** and **Efficient MLLM**.

<span style="color:PaleVioletRed;">I am currently seeking PhD positions for Fall 2027 and open to all forms of collaboration. Please feel free to contact me directly via email.</span>

# 🔥 News
- *2025.06*: &nbsp; One paper accepted to TPAMI(IF=20.8). Congrats to Chunming!
- *2025.05*: &nbsp; One paper accepted to ICML 2025. Congrats to Chunming!
- *2025.02*: &nbsp; One paper accepted to IEEE TPAMI(IF=20.8). Congrats to Chunming and Yuqi!
- *2025.02*: &nbsp; One paper has been selected as a **Spotlight Paper** to the ICLR 2025.
- *2025.01*: &nbsp; Two papers accepted to ICLR 2025. One paper accepted to ICRA 2025. Congrats to Chunming, Chenyang and Yuelin!
- *2024.12*: &nbsp; One paper accepted to CAAI AIR. Congrats to Fengyang and Sujie, this research was reported by EureAlert!
- *2024.09*: &nbsp; One paper accepted to NeurIPS 2024 as a **Spotlight Paper**.
- *2024.06*: &nbsp; I graduated from Southwest University and received the honor of "Southwest University Outstanding Student Representative".
- *2024.02*: &nbsp; One paper accepted to CVPR 2024, Congrats to Yuelin.

[//]: # (- *2023.04*: &nbsp; One paper accepted to ICMR 2023.)
 
# 📝 Selected Publications 

_${\*}$ Equal contribution, ${\dagger}$ Corresponding author_

## Recommendation

<div class='paper-box' style="margin-top: -20px"><div class='paper-box-image'><div><div class="badge">NeurIPS 2024 Spotlight⭐️</div><img src='images/images/publication/corun.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Real-world Image Dehazing with Coherence-based Pseudo Labeling and Cooperative Unfolding Network](https://arxiv.org/pdf/2406.07966)

<span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Chunming He$^{\*}$$^{\dagger}$, Fengyang Xiao, Yulun Zhang$^{\dagger}$, Longxiang Tang, Yuelin Zhang, Kai Li, and Xiu Li$^{\dagger}$

[PDF](https://arxiv.org/pdf/2406.07966) [Code](https://github.com/cnyvfang/CORUN-Colabator) [Slides](https://drive.google.com/file/d/1KgPnSNQYnRfCGP24N67w_eTFBsJD0iSf/view?usp=sharing) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- The cooperative unfolding network (CORUN) and the first plug-in-play iterative mean-teacher framework (Colabator) for real-world image dehazing.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025 Spotlight⭐</div><img src='images/images/publication/reti-diff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Reti-Diff: Illumination Degradation Image Restoration with Retinex-based Latent Diffusion Model](https://arxiv.org/abs/2311.11638)

Chunming He$^{\*}$, <span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$$^{\dagger}$</span>, Yulun Zhang$^{\dagger}$, Kai Li, Longxiang Tang, Chengyu You, Fengyang Xiao, Zhenhua Guo, Xiu Li$^{\dagger}$ and Sina Farsiu

[PDF](https://arxiv.org/abs/2311.11638) [Code](https://github.com/ChunmingHe/Reti-Diff)
<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- The first latent diffusion model-based methods with strong generalizability in illumination degradation image restoration problems and promising performance in downstream tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/images/publication/unicos.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Integrating Extra Modality Helps Segmentor Find Camouflaged Objects Well](http://arxiv.org/abs/2502.14471)

<span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Chunming He$^{\*}$, Longxiang Tang, Yuelin Zhang, Chenyang Zhu, Yuqi Shen, Chubin Chen, Guoxia Xu, and Xiu Li$^{\dagger}$

[PDF](http://arxiv.org/abs/2502.14471) [Code](https://github.com/cnyvfang/UniCOS)
<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A novel framework that effectively leverages diverse data modalities to improve segmentation performance.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2025</div><img src='images/images/publication/llv_survey.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Diffusion Models in Low-Level Vision: A Survey](https://arxiv.org/pdf/2406.11138)

Chunming He$^{\*}$$^{\dagger}$, Yuqi Shen$^{\*}$, <span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Fengyang Xiao, Longxiang Tang, Yulun Zhang, Wangmeng Zuo, Zhenhua Guo, Xiu Li$^{\dagger}$

[PDF](https://arxiv.org/abs/2406.11138) [Awesome List](https://github.com/ChunmingHe/awesome-diffusion-models-in-low-level-vision)
<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A curated list of awesome Diffusion Models(DMs) in low-level vision.
</div>
</div>

[//]: # (## More Under Review)

## More Selected Papers

- Uncertainty-Masked Bernoulli Diffusion for Camouflaged Object Detection Refinement , **arXiv 2025** [[PDF]](https://arxiv.org/pdf/2506.10712/) 
  Yuqi Shen$^{\*}$, Fengyang Xiao$^{\*}$, Sujie Hu, Youwei Pang, Yifan Pu, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Xiu Li, Chunming He 
- Segment Concealed Objects with Incomplete Supervision, **TPAMI 2025** [[PDF]](https://ieeexplore.ieee.org/abstract/document/11023026/)
  Chunming He$^{\*}$, Kai Li$^{\*}$, Yachao Zhang, Ziyun Yang, Youwei Pang, Longxiang Tang, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Yulun Zhang, Linghe Kong, Xiu Li, Sina Farsiu$^{\dagger}$
- UnfoldIR: Rethinking Deep Unfolding Network in Illumination Degradation Image Restoration, **arXiv 2025** [[PDF]](https://arxiv.org/pdf/2505.06683)
  Chunming He$^{\*}$, Rihan Zhang$^{\*}$, Fengyang Xiao, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Longxiang Tang, Yulun Zhang, Sina Farsiu$^{\dagger}$
- RUN: Reversible Unfolding Network for Concealed Object Segmentation, **ICML 2025** [[PDF]](https://arxiv.org/pdf/2501.18783)
  Chunming He, Rihan Zhang, Fengyang Xiao, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Longxiang Tang, Yulun Zhang, Linghe Kong, Deng-Ping Fan, Kai Li, Sina Farsiu$^{\dagger}$
- Instantswap: Fast customized concept swapping across sharp shape differences, **ICLR 2025** [[PDF]](https://arxiv.org/pdf/2412.01197) [[Code]](https://instantswap.github.io/)
  Chenyang Zhu$^{\*}$, Kai Li$^{\*}$$^{\dagger}$, Yue Ma$^{\*}$, Longxiang Tang, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Chubin Chen, Qifeng Chen, Xiu Li$^{\dagger}$
- A Survey of Camouflaged Object Detection and Beyond, **CAAI AIR 2024** [[PDF]](https://www.arxiv.org/abs/2408.14562) [[Awesome List]](https://github.com/ChunmingHe/awesome-concealed-object-segmentation)
  Fengyang Xiao$^{\*}$, Sujie Hu$^{\*}$, Yuqi Shen, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Jinfa Huang, Chunming He$^{\dagger}$, Longxiang Tang, Ziyun Yang, Xiu Li$^{\dagger}$
- A Unified Framework for Microscopy Defocus Deblur with Multi-Pyramid Transformer and Contrastive Learning, **CVPR 2024** [[PDF]](https://arxiv.org/pdf/2403.02611) [[Code]](https://github.com/PieceZhang/MPT-CataBlur/)
  Yuelin Zhang, Pengyu Zheng, Wanquan Yan, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Shing Shin Cheng$^{\dagger}$

_You can find more paper in my [Google Scholar](https://scholar.google.com/citations?user=EUT9kn8AAAAJ)._

[//]: # (- Joint Geometric-Semantic Driven Character Line Drawing Generation, **ACM ICMR 2023** [[PDF]]&#40;https://dl.acm.org/doi/10.1145/3591106.3592216&#41; [[Code]]&#40;https://github.com/cnyvfang/P2LDGAN/&#41;)

[//]: # (  <br><span style="color:PaleVioletRed;">Chengyu Fang</span>, Xianfeng Han$^{\dagger}$)


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
- *2025.04 - Present*, Alibaba DAMO Academy, Hangzhou, China.
- *2023.07 - 2024.08*, Prof. Xiu Li’s [research group](https://thusigsclub.github.io/thu.github.io/index.html) at Tsinghua University, Shenzhen, China.

# 🏁 Competition

- *2023.08* 🏅1st Prize of "Texas Instruments Cup" 2023 National Undergraduate Electronic Design Contest
- *2023.08* 🏅1st Prize of "China Software Cup" University Student Software Design Competition
- *2023.08* 🏅1st Prize of "China University Student Embedded Chip and System Design Competition
- *2023.04* 🏅1st Prize of 2023 China University Robot Competition (RoboMaster RMUL)
- *2022.08* 🏅️1st Prize of "China Software Cup" University Student Software Design Competition
- *2022.12* 🏅1st Prize of 2022 China University Robot Competition (RoboMaster RMUL)
- *2023.06* 🥈2nd Prize in China Robotics and Artificial Intelligence Competition
- *2022.08* 🥈2nd Prize of "China Software Cup" University Student Software Design Competition
- *2022.06* 🥈2nd Prize of 2022 China University Robot Competition (RoboMaster RMUT)
- *2023.08* 🥉3rd Prize in Chinese Collegiate Computing Competition

# 🧑‍🤝‍🧑 My Friends and Collaborators
- <a href="https://chunminghe.github.io">Chunming He</a>@Duke,  <a href="https://scholar.google.com/citations?hl=en&user=3oMQsq8AAAAJ">Longxiang Tang</a>@Tsinghua,  <a href="https://scholar.google.com/citations?user=Q5DbNDoAAAAJ&hl=en">Yuelin Zhang</a>@CUHK, [Dr. Yulun Zhang](https://yulunzhang.com)@SJTU, [Dr. Kai Li](http://kailigo.github.io/)@Meta.


---



<script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=080808&w=300&t=tt&d=UaEZ9aWqtuSiJ8XwjZ5AvyTi6KONBoibOX0doG1dnSQ&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080"></script>