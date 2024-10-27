---
title: Min Hjemmeside
description: En moderne, hurtig hjemmeside bygget med Fresh og Deno. Med en blog, projektportfolio og helt hjemmelavet.
technologies: ["Deno", "Fresh", "TypeScript", "Tailwind CSS", "Markdown"]
githubUrl: https://github.com/magniswerfer/my-personal-website
featured: true
order: 1
thumbnail: /images/projects/thumbnail-website.png
---

## Overview

This portfolio website serves as both a showcase of my work and a platform for sharing my thoughts through the integrated blog system. Built with modern technologies and performance in mind, it demonstrates clean code practices and attention to design details.

## Key Features

### Blog System
- Markdown-based content management
- YAML front matter for metadata
- Automatic post listing and pagination
- Clean typography with proper spacing

### Project Showcase
- Featured projects section
- Detailed project pages
- Technology stack tags
- Live demo and source code links

### Technical Implementation

The website is built using the following tech stack:

```typescript
// Example of the blog post loader
export async function loadPost(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = `./posts/${slug}.md`    
        const content = await Deno.readTextFile(filePath);
        // Process markdown and front matter...
        return post;   
    } catch (e) {
        console.error(`Error loading post ${slug}`, e);
        return null;
    }
}
```

## Performance Optimization

1. **Static Generation**
   - Pre-rendered pages for optimal loading speed
   - Minimal JavaScript footprint

2. **Image Optimization**
   - Responsive images
   - Lazy loading implementation
   - Proper aspect ratio maintenance

3. **CSS Strategy**
   - Tailwind for utility-first CSS
   - Custom components when needed
   - Responsive design principles

## Development Process

The development followed these key steps:

1. Initial setup with Fresh framework
2. Implementation of core features
3. Design and styling with Tailwind CSS
4. Content management system setup
5. Testing and optimization
6. Deployment and monitoring

## Lessons Learned

Throughout the development of this portfolio, several key insights were gained:

- The importance of proper content organization
- Benefits of using a modern meta-framework
- Value of clean, maintainable code
- Balance between aesthetics and performance

## Future Improvements

Plans for future enhancements include:

- [ ] Add dark mode support
- [ ] Implement search functionality
- [ ] Add RSS feed for blog posts
- [ ] Improve image loading strategy
- [ ] Add interactive project demos

## Conclusion

This project serves as both a practical portfolio and a testament to modern web development practices. It showcases the possibilities of building fast, efficient websites while maintaining excellent user experience.
