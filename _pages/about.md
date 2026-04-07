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

I am currently a second-year master’s student at the Institute of Data and Information, Tsinghua University, advised by <a href="https://scholar.google.com/citations?user=Xrh1OIUAAAAJ&amp;hl=en">Prof. Xiu Li</a>. I previously worked on MLLM post-training at Alibaba DAMO Academy as a Research Scientist Intern. 
Before that, I received my B.Eng. degree in Software Engineering from Southwest University in 2024, where I graduated with the “Special Scholarship” and the title of “Outstanding Student Representative.”
My research interests revolve around the intersection of real-world oriented vision perception and generation, and MLLM post-training.

<span style="color:PaleVioletRed;">_I am currently seeking PhD positions for Fall 2027 and open to all forms of collaboration._</span>

# 🔥 News
- *2026.01*: &nbsp; Two papers accepted to ICLR 2026. Congrats to Zheng Jiang and Heng Guo!
- *2025.06*: &nbsp; One paper accepted to TPAMI(IF=20.8). Congrats to Chunming!
- *2025.02*: &nbsp; One paper accepted to IEEE TPAMI(IF=20.8). Congrats to Chunming and Yuqi!
- *2025.02*: &nbsp; One paper has been selected as a **Spotlight Paper** to the ICLR 2025.
- *2025.01*: &nbsp; Two papers accepted to ICLR 2025. Congrats to Chunming, Chenyang!
- *2024.09*: &nbsp; One paper accepted to NeurIPS 2024 as a **Spotlight Paper**.

[//]: # (- *2023.04*: &nbsp; One paper accepted to ICMR 2023.)
 
# 📝 Selected Publications 

_${\*}$ Equal contribution, ${\dagger}$ Corresponding author_

## Recommendation

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/images/publication/photon.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Photon: Speedup Volume Understanding with Efficient Multimodal Large Language Models](https://arxiv.org/pdf/2603.25155)

<span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Heng Guo$^{\*}$, Zheng Jiang, Chunming He, Xiu Li$^{\dagger}$, Minfeng Xu$^{\dagger}$

<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Photon is a variable-length 3D medical VQA framework with instruction-conditioned token scheduling and surrogate gradients, achieving adaptive acceleration and state-of-the-art performance.
</div>
</div>


<div class='paper-box' style="margin-top: -20px"><div class='paper-box-image'><div><div class="badge">NeurIPS 2024 Spotlight⭐️</div><img src='images/images/publication/corun.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Real-world Image Dehazing with Coherence-based Pseudo Labeling and Cooperative Unfolding Network](https://arxiv.org/pdf/2406.07966)

<span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Chunming He$^{\*}$$^{\dagger}$, Fengyang Xiao, Yulun Zhang$^{\dagger}$, Longxiang Tang, Yuelin Zhang, Kai Li, and Xiu Li$^{\dagger}$

<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- The cooperative unfolding network (CORUN) and the first plug-in-play iterative mean-teacher framework (Colabator) for real-world image dehazing.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025 Spotlight⭐</div><img src='images/images/publication/reti-diff.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Reti-Diff: Illumination Degradation Image Restoration with Retinex-based Latent Diffusion Model](https://arxiv.org/abs/2311.11638)

Chunming He$^{\*}$, <span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$$^{\dagger}$</span>, Yulun Zhang$^{\dagger}$, Kai Li, Longxiang Tang, Chengyu You, Fengyang Xiao, Zhenhua Guo, Xiu Li and Sina Farsiu$^{\dagger}$

<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- The first latent diffusion model-based methods with strong generalizability in illumination degradation image restoration problems and promising performance in downstream tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ArXiv 2026</div><img src='images/images/publication/prism.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PRISM: Rethinking Scattered Atmosphere Reconstruction as a Unified Understanding and Generation Model for Real-world Dehazing
](#)

<span style="color:PaleVioletRed;">Chengyu Fang</span>, Chunming He, Yuelin Zhang, Chubin Chen, Chenyang Zhu, Longxiang Tang, and Xiu Li$^{\dagger}$


<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- PRISM is a real-world dehazing framework that jointly reconstructs clear scenes and scattering variables, while bridging the sim2real domain gap through selective self-distillation and self-reinforcing prior.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/images/publication/medvr.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Annotation-Free Medical Visual Reasoning via Agentic Reinforcement Learning](https://openreview.net/pdf?id=cK35kNVm5r)

Zheng Jiang$^{\*}$, Heng Guo$^{\*}$, <span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Changchen Xiao, Xinyang Hu, Lifeng Sun$^{\dagger}$, Minfeng Xu$^{\dagger}$

<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- MedVR is the first end-to-end reinforcement learning framework that integrates visual and textual reasoning for medical VLMs, eliminating the need for costly intermediate supervision.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2025</div><img src='images/images/publication/llv_survey.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Diffusion Models in Low-Level Vision: A Survey](https://arxiv.org/pdf/2406.11138)

Chunming He$^{\*}$$^{\dagger}$, Yuqi Shen$^{\*}$, <span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Fengyang Xiao, Longxiang Tang, Yulun Zhang, Wangmeng Zuo, Zhenhua Guo, Xiu Li$^{\dagger}$

<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A curated list of awesome Diffusion Models(DMs) in low-level vision.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/images/publication/multicos.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MultiCOS: Unlocking the Potential of Limited Multimodal Data in Camouflaged Object Segmentation](http://arxiv.org/abs/2502.14471)

<span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Chunming He$^{\*}$, Yuqi Shen, Chenyang Zhu, Yuelin Zhang, Fengyang Xiao, Longxiang Tang, Chubin Chen, Xiu Li$^{\dagger}$

<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A novel framework that effectively leverages diverse data modalities to improve segmentation performance.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/images/publication/m3ret.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[M3Ret: Unleashing Zero-shot Multimodal Medical Image Retrieval via Self-Supervision](https://arxiv.org/pdf/2509.01360)

Che Liu$^{\*}$, Zheng Jiang$^{\*}$, <span style="color:PaleVioletRed;">Chengyu Fang$^{\*}$</span>, Heng Guo, Yan-Jie Zhou, Jiaqi Qu, Le Lu, Minfeng Xu$^{\dagger}$

<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A unified visual encoder without any modality-specific customization for various medical visual modalities in 2D and 3D.
</div>
</div>

[//]: # (## More Under Review)

## More Selected Publications

[//]: # (- MedVR: Annotation-Free Medical Visual Reasoning via Agentic Reinforcement Learning, **ICLR 2026** [[PDF]]&#40;https://openreview.net/pdf?id=cK35kNVm5r&#41;)
[//]: # (  Zheng Jiang, Heng Guo, Chengyu Fang, Changchen Xiao, Xinyang Hu, Lifeng Sun, Minfeng Xu)
- Taming Preference Mode Collapse via Directional Decoupling Alignment in Diffusion Reinforcement Learning, **CVPR 2026** [[PDF]](https://arxiv.org/pdf/2512.24146)
  Chubin Chen$^{\*}$, Sujie Hu$^{\*}$, Jiashu Zhu, Meiqi Wu, Jintao Chen, Yanxun Li, Nisha Huang, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Jiahong Wu, Xiangxiang Chu, Xiu Li$^{\dagger}$
- Uncertainty-Masked Bernoulli Diffusion for Camouflaged Object Detection Refinement, **arXiv 2025** [[PDF]](https://arxiv.org/pdf/2506.10712/) 
  Yuqi Shen$^{\*}$, Fengyang Xiao$^{\*}$, Sujie Hu, Youwei Pang, Yifan Pu, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Xiu Li, Chunming He 
- Segment Concealed Objects with Incomplete Supervision, **TPAMI 2025** [[PDF]](https://ieeexplore.ieee.org/abstract/document/11023026/)
  Chunming He$^{\*}$, Kai Li$^{\*}$, Yachao Zhang, Ziyun Yang, Youwei Pang, Longxiang Tang, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Yulun Zhang, Linghe Kong, Xiu Li, Sina Farsiu$^{\dagger}$
- UnfoldIR: Rethinking Deep Unfolding Network in Illumination Degradation Image Restoration, **arXiv 2025** [[PDF]](https://arxiv.org/pdf/2505.06683)
  Chunming He$^{\*}$, Rihan Zhang$^{\*}$, Fengyang Xiao, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Longxiang Tang, Yulun Zhang, Sina Farsiu$^{\dagger}$
- RUN: Reversible Unfolding Network for Concealed Object Segmentation, **ICML 2025** [[PDF]](https://arxiv.org/pdf/2501.18783)
  Chunming He, Rihan Zhang, Fengyang Xiao, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Longxiang Tang, Yulun Zhang, Linghe Kong, Deng-Ping Fan, Kai Li, Sina Farsiu$^{\dagger}$
- Instantswap: Fast customized concept swapping across sharp shape differences, **ICLR 2025** [[PDF]](https://arxiv.org/pdf/2412.01197) 
  Chenyang Zhu$^{\*}$, Kai Li$^{\*}$$^{\dagger}$, Yue Ma$^{\*}$, Longxiang Tang, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Chubin Chen, Qifeng Chen, Xiu Li$^{\dagger}$
- A Survey of Camouflaged Object Detection and Beyond, **CAAI AIR 2024** [[PDF]](https://www.arxiv.org/abs/2408.14562) 
  Fengyang Xiao$^{\*}$, Sujie Hu$^{\*}$, Yuqi Shen, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Jinfa Huang, Chunming He$^{\dagger}$, Longxiang Tang, Ziyun Yang, Xiu Li$^{\dagger}$
- A Unified Framework for Microscopy Defocus Deblur with Multi-Pyramid Transformer and Contrastive Learning, **CVPR 2024** [[PDF]](https://arxiv.org/pdf/2403.02611)
  Yuelin Zhang, Pengyu Zheng, Wanquan Yan, <span style="color:PaleVioletRed;">Chengyu Fang</span>, Shing Shin Cheng$^{\dagger}$

You can find more paper in my [Google Scholar](https://scholar.google.com/citations?user=EUT9kn8AAAAJ).

[//]: # (- Joint Geometric-Semantic Driven Character Line Drawing Generation, **ACM ICMR 2023** [[PDF]]&#40;https://dl.acm.org/doi/10.1145/3591106.3592216&#41; [[Code]]&#40;https://github.com/cnyvfang/P2LDGAN/&#41;)

[//]: # (  <br><span style="color:PaleVioletRed;">Chengyu Fang</span>, Xianfeng Han$^{\dagger}$)



# 📖 Teaching

- *2023.09 - 2024.01 & 2024.09 - 2025.01*, Teaching Assistant for Frontiers of AI technology and industrial applications, Tsinghua University.

[//]: # ()
[//]: # (# 💬 Invited Talks)

[//]: # (- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[//]: # (- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]]&#40;https://github.com/&#41;)

# 💻 Internships
- *2025.04 - 2026.04*, Research Scientist Intern, DAMO Academy, Alibaba Group.
- *2023.07 - 2024.08*, Research Assistant, Prof. Xiu Li’s [research group](https://thusigsclub.github.io/thu.github.io/index.html) at Tsinghua University.


[//]: # (# 🤝 Academic Services)

[//]: # (- *Conference Reviewer: * NeurIPS, ICLR, ICML, ICRA, ACM MM, ACM MM Asia, BMVC, ICMR)

[//]: # (- *Journal Reviewer: * TCSVT, PR, )

# 🎖 Honors and Awards
- *2024.06* Chongqing Outstanding Graduates
- *2024.05* Representative of National Scholarship (Published in China’s official media People’s Daily).
- *2024.04* Chongqing Merit Student
- *2023.12* Southwest University Outstanding Student Representative
- *2023.04* Chongqing Advanced Individual for Innovation Capability


# 📃 Scholarships
- *2023.12* National Scholarship
- *2022.12* National Scholarship
- *2023.12* Xiaomi Corporation Special Scholarship
- *2023.12* Southwest University Special Scholarship
- *2022.07* Professor Qiu Yuhui Scholarship
- *2022.07* Pisen Electronics Co. Ltd Scholarship
- *2021.10* Southwest University First Prize Scholarship


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

# 💬 Invited Talk

- *2026.04* ICLR Paper Pre-presentation, AI TIME X DAMO Developer Matrix.

# 🧑‍🤝‍🧑 My Friends, Collaborators, and Long-term Cooperative Professors
- <a href="https://chunminghe.github.io">Chunming He</a>@Duke,  <a href="https://scholar.google.com/citations?hl=en&user=3oMQsq8AAAAJ">Longxiang Tang</a>@HKUST,  <a href="https://scholar.google.com/citations?user=Q5DbNDoAAAAJ&hl=en">Yuelin Zhang</a>@CUHK, [Assoc. Prof. Yulun Zhang](https://yulunzhang.com)@SJTU.


---



<script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=080808&w=300&t=tt&d=UaEZ9aWqtuSiJ8XwjZ5AvyTi6KONBoibOX0doG1dnSQ&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080"></script>