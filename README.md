# CounterVid

### Counterfactual Video Generation for Mitigating Action and Temporal Hallucinations in Video-Language Models

[![EMNLP 2026](https://img.shields.io/badge/EMNLP-2026-8c1b13.svg)](https://2026.emnlp.org/)
[![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-CounterVid-FFD21E)](https://huggingface.co/collections/aimagelab/countervid)

Official repository for **CounterVid**, accepted at **EMNLP 2026** (Main Conference).

> **Internship project.** This research was conducted during [Tobia Poppi](https://tobiapoppi.github.io/)'s Applied Scientist internship at Amazon, with the Amazon Prime Video team in Seattle.

> The CounterVid dataset and trained model checkpoints are available on Hugging Face.

## Overview

Video-language models can produce answers that are linguistically plausible but unsupported by the visual evidence, particularly when recognizing actions or reasoning about event order. CounterVid addresses these failure modes through scalable counterfactual video generation and preference-based alignment.

The framework:

- generates semantically matched videos that preserve scene context while changing actions or temporal order;
- builds approximately 26K synthetic preference pairs for action recognition and temporal ordering;
- introduces **MixDPO**, which jointly learns from textual and visual preferences; and
- improves visual grounding across Qwen2.5-VL and InternVL3 while largely preserving general video understanding.

## Method

CounterVid starts from a representative frame and proposes plausible alternative actions for the same scene. Image editing and image-to-video generation then produce clips with shared visual context but different action dynamics. These controlled counterfactuals provide two complementary training signals:

- **Textual preferences (t-pref):** prefer a grounded answer over a plausible hallucinated answer for the same video.
- **Visual preferences (v-pref):** prefer the correct video over a counterfactual video for the same question and answer.

MixDPO optimizes both signals jointly, encouraging output grounding and sensitivity to fine-grained visual evidence.

## Releases

| Resource | Status |
| --- | --- |
| Paper | Coming soon |
| Training and evaluation code | Coming soon |
| CounterVid preference data | [Available on Hugging Face](https://huggingface.co/datasets/aimagelab/CounterVid) |
| Model checkpoints | Available on Hugging Face (see below) |

### Dataset

The [CounterVid dataset](https://huggingface.co/datasets/aimagelab/CounterVid) contains 26,167 training preference pairs and a separate held-out split with 2,910 examples. It can be loaded directly with 🤗 Datasets:

```python
from datasets import load_dataset

dataset = load_dataset("aimagelab/CounterVid")
```

### Models

| Model | Base model | Checkpoint |
| --- | --- | --- |
| CounterVid Qwen2.5-VL-3B | Qwen2.5-VL-3B-Instruct | [Hugging Face](https://huggingface.co/aimagelab/CounterVid-Qwen2.5-VL-3B-LoRA) |
| CounterVid Qwen2.5-VL-7B | Qwen2.5-VL-7B-Instruct | [Hugging Face](https://huggingface.co/aimagelab/CounterVid-Qwen2.5-VL-7B-LoRA) |
| CounterVid InternVL3-9B | InternVL3-9B-Instruct | [Hugging Face](https://huggingface.co/aimagelab/CounterVid-InternVL3-9B-LoRA) |

The released checkpoints contain merged weights and can be loaded as standalone models without PEFT. Model-specific loading instructions are provided in each Hugging Face model card.

## Citation

If you find this project useful, please cite:

```bibtex
@inproceedings{poppi2026countervid,
  title     = {{CounterVid}: Counterfactual Video Generation for Mitigating Action and Temporal Hallucinations in Video-Language Models},
  author    = {Poppi, Tobia and Uzkent, Burak and Garg, Amanmeet and Porto, Lucas and Kessler, Garin and Yang, Yezhou and Cornia, Marcella and Baraldi, Lorenzo and Cucchiara, Rita and Schiffers, Florian},
  booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing},
  year      = {2026}
}
```

## Contact

For questions about the project, please open an issue in this repository.
