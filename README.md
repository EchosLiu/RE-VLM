# RE-VLM: Event-Augmented Vision-Language Model for Scene Understanding

**CVPR 2026**

> RE-VLM is the first dual-stream vision-language model that jointly leverages RGB images and event streams for robust scene understanding across both normal and challenging conditions.

## Project Page

This repository hosts the **project page** for the RE-VLM paper. The page is built with plain HTML/CSS/JS and can be served locally or deployed via GitHub Pages.

### Local Development

```bash
# Start a local development server
python3 -m http.server 8080

# Then open http://localhost:8080 in your browser
```

### Deployment

This page is designed to be deployed via **GitHub Pages**. To enable:

1. Go to repository **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose the `main` branch and `/ (root)` folder
4. Click **Save**

The page will be available at `https://<username>.github.io/RE-VLM/`.

### Customization

- **Authors & Affiliations**: Edit the hero section in `index.html`
- **Figures**: Replace placeholder content with actual paper figures in `static/images/`
- **BibTeX**: Update the citation block in `index.html`
- **Links**: Update Paper, Code, Dataset, Video links in the hero section

## Project Structure

```
├── index.html              # Main page
├── static/
│   ├── css/
│   │   └── style.css       # Styling
│   ├── js/
│   │   └── main.js         # Interactions (copy BibTeX, scroll animations)
│   ├── images/             # Paper figures (add your own)
│   └── videos/             # Demo videos (optional)
├── README.md
└── LICENSE
```

## Citation

```bibtex
@inproceedings{revlm2026,
  title     = {RE-VLM: Event-Augmented Vision-Language Model
               for Scene Understanding},
  author    = {Author1 and Author2 and Author3
               and Author4 and Author5},
  booktitle = {Proceedings of the IEEE/CVF Conference on
               Computer Vision and Pattern Recognition (CVPR)},
  year      = {2026}
}
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
