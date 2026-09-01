(function() {
  'use strict';

  // ===== CONFIG =====
  const CONFIG = {
    renderedCount: 180,
    radiusX: 660,
    radiusY: 175,
    centerX: 0.5,
    centerY: 0.62,
    perspective: 1200,
    autoRotateSpeed: 0.0004,
    mouseInfluence: 0.3,
    damping: 0.92,
    dragSensitivity: 0.003,
    hoverScale: 1.15,
    frontScale: 1.0,
    sideScale: 0.78,
    backScale: 0.52,
    frontOpacity: 1.0,
    sideOpacity: 0.82,
    backOpacity: 0.32,
    maxBlur: 1.2,
    panelWidth: 42,
    panelHeight: 112
  };

  // ===== STATE =====
  let state = {
    rotationOffset: 0,
    velocity: 0,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartRotation: 0,
    selectedProperty: null,
    hoveredProperty: null,
    filteredProperties: null,
    isGridView: false,
    animationId: null,
    lastTime: 0,
    isTouch: false
  };

  // ===== DOM ELEMENTS =====
  const ringGallery = document.getElementById('ringGallery');
  const ringContainer = document.getElementById('ringContainer');
  const hero = document.getElementById('hero');
  const centerPreview = document.getElementById('centerPreview');
  const previewImage = document.getElementById('previewImage');
  const previewTitle = document.getElementById('previewTitle');
  const previewMeta = document.getElementById('previewMeta');
  const previewCta = document.getElementById('previewCta');
  const heroHeadline = document.getElementById('heroHeadline');
  const heroSubheading = document.getElementById('heroSubheading');
  const categoryLabels = document.getElementById('categoryLabels');
  const customCursor = document.getElementById('customCursor');
  const filterOverlay = document.getElementById('filterOverlay');
  const gridSection = document.getElementById('gridSection');
  const gridContainer = document.getElementById('gridContainer');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  // ===== DETECT TOUCH =====
  state.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // ===== INIT =====
  function init() {
    buildCategoryLabels();
    buildFilterOptions();
    createPanels();
    bindEvents();
    if (!state.isTouch) {
      customCursor.classList.add('visible');
    }
    animate(performance.now());
  }

  // ===== GET DISPLAY PROPERTIES =====
  function getDisplayProperties() {
    return state.filteredProperties || properties;
  }

  // ===== BUILD CATEGORY LABELS =====
  function buildCategoryLabels() {
    categoryLabels.innerHTML = '';
    categories.forEach(cat => {
      const label = document.createElement('span');
      label.className = 'category-label';
      label.innerHTML = cat.name + ' <span class="category-count">' + cat.count + '</span>';
      label.addEventListener('click', () => {
        filterByCategory(cat.name);
      });
      categoryLabels.appendChild(label);
    });
  }

  // ===== BUILD FILTER OPTIONS =====
  function buildFilterOptions() {
    const filterType = document.getElementById('filterType');
    const filterLocation = document.getElementById('filterLocation');
    const filterBudget = document.getElementById('filterBudget');
    const filterStatus = document.getElementById('filterStatus');
    const filterBedrooms = document.getElementById('filterBedrooms');

    categories.forEach(cat => {
      const pill = createFilterPill(cat.name, 'type');
      filterType.appendChild(pill);
    });

    locations.forEach(loc => {
      const pill = createFilterPill(loc, 'location');
      filterLocation.appendChild(pill);
    });

    ['Under $500K', '$500K–$1M', '$1M–$3M', '$3M+'].forEach(budget => {
      const pill = createFilterPill(budget, 'budget');
      filterBudget.appendChild(pill);
    });

    statuses.forEach(status => {
      const pill = createFilterPill(status, 'status');
      filterStatus.appendChild(pill);
    });

    ['1 BHK', '2 BHK', '3 BHK', '4+ BHK', 'Plot', 'Retail', 'Studio'].forEach(bed => {
      const pill = createFilterPill(bed, 'bedrooms');
      filterBedrooms.appendChild(pill);
    });
  }

  function createFilterPill(text, group) {
    const pill = document.createElement('button');
    pill.className = 'filter-pill';
    pill.textContent = text;
    pill.dataset.group = group;
    pill.dataset.value = text;
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
    });
    return pill;
  }

  // ===== CREATE PANELS =====
  function createPanels() {
    ringGallery.innerHTML = '';
    const displayProps = getDisplayProperties();
    const count = Math.min(CONFIG.renderedCount, displayProps.length);

    for (let i = 0; i < count; i++) {
      const prop = displayProps[i];
      const panel = document.createElement('div');
      panel.className = 'panel';
      panel.dataset.index = i;
      panel.dataset.propId = prop.id;

      const img = document.createElement('img');
      img.src = prop.thumbnail;
      img.alt = prop.title;
      img.loading = 'lazy';
      img.onerror = function() {
        this.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="140"><rect fill="#ddd" width="100" height="140"/></svg>');
      };

      panel.appendChild(img);
      ringGallery.appendChild(panel);
    }
  }

  // ===== BIND EVENTS =====
  function bindEvents() {
    // Mouse move
    hero.addEventListener('mousemove', (e) => {
      if (state.isTouch) return;
      const rect = hero.getBoundingClientRect();
      state.targetMouseX = (e.clientX - rect.left) / rect.width - 0.5;
      state.targetMouseY = (e.clientY - rect.top) / rect.height - 0.5;

      if (!state.isDragging) {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
      }
    });

    hero.addEventListener('mouseenter', () => {
      if (!state.isTouch) customCursor.classList.add('hovering');
    });

    hero.addEventListener('mouseleave', () => {
      if (!state.isTouch) customCursor.classList.remove('hovering');
    });

    // Drag
    ringContainer.addEventListener('mousedown', (e) => {
      if (state.isTouch) return;
      state.isDragging = true;
      state.dragStartX = e.clientX;
      state.dragStartRotation = state.rotationOffset;
      state.velocity = 0;
      customCursor.classList.add('hovering');
    });

    document.addEventListener('mousemove', (e) => {
      if (!state.isDragging) return;
      const dx = e.clientX - state.dragStartX;
      state.rotationOffset = state.dragStartRotation + dx * CONFIG.dragSensitivity;
      state.velocity = dx * CONFIG.dragSensitivity * 0.1;
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (state.isDragging) {
        state.isDragging = false;
        customCursor.classList.remove('hovering');
      }
    });

    // Touch events
    ringContainer.addEventListener('touchstart', (e) => {
      state.isDragging = true;
      state.dragStartX = e.touches[0].clientX;
      state.dragStartRotation = state.rotationOffset;
      state.velocity = 0;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      if (!state.isDragging) return;
      const dx = e.touches[0].clientX - state.dragStartX;
      state.rotationOffset = state.dragStartRotation + dx * CONFIG.dragSensitivity;
      state.velocity = dx * CONFIG.dragSensitivity * 0.1;
    }, { passive: true });

    document.addEventListener('touchend', () => {
      state.isDragging = false;
    });

    // Panel click/hover
    ringGallery.addEventListener('click', (e) => {
      const panel = e.target.closest('.panel');
      if (!panel) return;
      const propId = parseInt(panel.dataset.propId);
      selectProperty(propId);
    });

    ringGallery.addEventListener('mouseover', (e) => {
      const panel = e.target.closest('.panel');
      if (!panel) return;
      const propId = parseInt(panel.dataset.propId);
      hoverProperty(propId);
    });

    ringGallery.addEventListener('mouseout', (e) => {
      const panel = e.target.closest('.panel');
      if (!panel) return;
      if (!state.selectedProperty) {
        unhoverProperty();
      }
    });

    // Hamburger
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    // Mobile nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });

    // Filter
    document.getElementById('filterBtn').addEventListener('click', openFilter);
    document.getElementById('filterClose').addEventListener('click', closeFilter);
    document.getElementById('filterApply').addEventListener('click', applyFilters);
    document.getElementById('filterClear').addEventListener('click', clearFilters);
    filterOverlay.addEventListener('click', (e) => {
      if (e.target === filterOverlay) closeFilter();
    });

    // Grid view
    document.getElementById('gridViewBtn').addEventListener('click', showGridView);
    document.getElementById('ringViewBtn').addEventListener('click', showRingView);

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeFilter();
        deselectProperty();
      }
    });
  }

  // ===== ANIMATION LOOP =====
  function animate(timestamp) {
    const delta = timestamp - state.lastTime;
    state.lastTime = timestamp;

    // Smooth mouse following
    state.mouseX += (state.targetMouseX - state.mouseX) * 0.06;
    state.mouseY += (state.targetMouseY - state.mouseY) * 0.06;

    // Auto rotation
    if (!state.isDragging) {
      state.rotationOffset += CONFIG.autoRotateSpeed;
      // Apply velocity with damping
      state.rotationOffset += state.velocity;
      state.velocity *= CONFIG.damping;
      if (Math.abs(state.velocity) < 0.00001) state.velocity = 0;
    }

    // Mouse influence on rotation
    const mouseOffsetX = state.mouseX * CONFIG.mouseInfluence;

    // Render panels
    const displayProps = getDisplayProperties();
    const panels = ringGallery.children;
    const count = panels.length;

    for (let i = 0; i < count; i++) {
      const panel = panels[i];
      const angle = (i / count) * Math.PI * 2 + state.rotationOffset + mouseOffsetX;
      const yTilt = state.mouseY * 0.15;

      const x = Math.cos(angle) * CONFIG.radiusX;
      const y = Math.sin(angle) * CONFIG.radiusY + yTilt * 50;
      const zDepth = Math.sin(angle);

      // Scale based on position
      let scale;
      if (zDepth > 0.3) {
        scale = CONFIG.frontScale + (zDepth - 0.3) * 0.15;
      } else if (zDepth > -0.3) {
        scale = CONFIG.sideScale + (zDepth + 0.3) * 0.5;
      } else {
        scale = CONFIG.backScale + (zDepth + 1) * 0.2;
      }
      scale = Math.max(CONFIG.backScale, Math.min(CONFIG.frontScale + 0.12, scale));

      // Opacity
      let opacity;
      if (zDepth > 0.3) {
        opacity = CONFIG.frontOpacity;
      } else if (zDepth > -0.3) {
        opacity = CONFIG.sideOpacity + (zDepth + 0.3) * 0.5;
      } else {
        opacity = CONFIG.backOpacity + (zDepth + 1) * 0.3;
      }
      opacity = Math.max(CONFIG.backOpacity, Math.min(CONFIG.frontOpacity, opacity));

      // Blur
      const blur = zDepth < 0 ? Math.abs(zDepth) * CONFIG.maxBlur : 0;

      // Rotation
      const rotateY = Math.cos(angle) * 12;

      // Z-index
      const zIndex = Math.round((zDepth + 1) * 50);

      // Check if hovered/selected
      const propId = parseInt(panel.dataset.propId);
      const isSelected = state.selectedProperty === propId;
      const isHovered = state.hoveredProperty === propId;

      if (isSelected || isHovered) {
        scale *= CONFIG.hoverScale;
        opacity = 1;
      }

      const transform = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(' + scale + ') rotateY(' + rotateY + 'deg)';
      const filter = blur > 0 ? 'blur(' + blur + 'px)' : 'none';

      panel.style.transform = transform;
      panel.style.opacity = opacity;
      panel.style.filter = filter;
      panel.style.zIndex = zIndex;
    }

    state.animationId = requestAnimationFrame(animate);
  }

  // ===== SELECT PROPERTY =====
  function selectProperty(propId) {
    const prop = properties.find(p => p.id === propId);
    if (!prop) return;

    state.selectedProperty = propId;
    state.hoveredProperty = propId;

    // Update center preview
    heroHeadline.style.opacity = '0';
    heroSubheading.style.opacity = '0';
    centerPreview.classList.add('active');
    previewImage.src = prop.image;
    previewImage.alt = prop.title;
    previewTitle.textContent = prop.title;
    previewMeta.textContent = prop.category + ' \u00B7 ' + prop.location;
    previewCta.href = 'mailto:inquiries@auraaestates.com?subject=Inquiry%3A%20' + encodeURIComponent(prop.title) + '&body=' + encodeURIComponent('Property: ' + prop.title + '%0ACategory: ' + prop.category + '%0ALocation: ' + prop.location + '%0APrice: ' + prop.priceRange + '%0AStatus: ' + prop.status);

    // Highlight panel
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const panel = ringGallery.querySelector('[data-prop-id="' + propId + '"]');
    if (panel) panel.classList.add('active');
  }

  // ===== HOVER PROPERTY =====
  function hoverProperty(propId) {
    if (state.selectedProperty) return;
    const prop = properties.find(p => p.id === propId);
    if (!prop) return;

    state.hoveredProperty = propId;

    heroHeadline.style.opacity = '0.15';
    heroSubheading.style.opacity = '0.15';
    centerPreview.classList.add('active');
    previewImage.src = prop.image;
    previewImage.alt = prop.title;
    previewTitle.textContent = prop.title;
    previewMeta.textContent = prop.category + ' \u00B7 ' + prop.location;
    previewCta.style.display = 'none';
  }

  function unhoverProperty() {
    if (state.selectedProperty) return;
    state.hoveredProperty = null;
    heroHeadline.style.opacity = '1';
    heroSubheading.style.opacity = '1';
    centerPreview.classList.remove('active');
    previewCta.style.display = '';
  }

  function deselectProperty() {
    state.selectedProperty = null;
    state.hoveredProperty = null;
    heroHeadline.style.opacity = '1';
    heroSubheading.style.opacity = '1';
    centerPreview.classList.remove('active');
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  }

  // ===== FILTER =====
  function filterByCategory(categoryName) {
    state.filteredProperties = properties.filter(p => p.category === categoryName);
    createPanels();
    deselectProperty();
    trackEvent('filter_applied', { category: categoryName });
  }

  function openFilter() {
    filterOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeFilter() {
    filterOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function applyFilters() {
    const activePills = filterOverlay.querySelectorAll('.filter-pill.active');
    const filters = {};

    activePills.forEach(pill => {
      const group = pill.dataset.group;
      const value = pill.dataset.value;
      if (!filters[group]) filters[group] = [];
      filters[group].push(value);
    });

    if (Object.keys(filters).length === 0) {
      state.filteredProperties = null;
    } else {
      state.filteredProperties = properties.filter(prop => {
        for (const group in filters) {
          const values = filters[group];
          let match = false;

          if (group === 'type') {
            match = values.includes(prop.category);
          } else if (group === 'location') {
            match = values.includes(prop.location);
          } else if (group === 'status') {
            match = values.includes(prop.status);
          } else if (group === 'bedrooms') {
            match = values.includes(prop.bedrooms);
          } else if (group === 'budget') {
            const price = prop.price;
            match = values.some(v => {
              if (v === 'Under $500K') return price < 500000;
              if (v === '$500K\u2013$1M') return price >= 500000 && price < 1000000;
              if (v === '$1M\u2013$3M') return price >= 1000000 && price < 3000000;
              if (v === '$3M+') return price >= 3000000;
              return false;
            });
          }

          if (!match) return false;
        }
        return true;
      });
    }

    createPanels();
    closeFilter();
    deselectProperty();
    trackEvent('filters_applied', filters);
  }

  function clearFilters() {
    filterOverlay.querySelectorAll('.filter-pill.active').forEach(p => p.classList.remove('active'));
  }

  // ===== GRID VIEW =====
  function showGridView() {
    state.isGridView = true;
    hero.style.display = 'none';
    gridSection.style.display = 'block';
    buildGrid();
    trackEvent('view_toggle', { view: 'grid' });
  }

  function showRingView() {
    state.isGridView = false;
    hero.style.display = '';
    gridSection.style.display = 'none';
    trackEvent('view_toggle', { view: 'ring' });
  }

  function buildGrid() {
    gridContainer.innerHTML = '';
    const displayProps = getDisplayProperties();
    const count = Math.min(36, displayProps.length);

    for (let i = 0; i < count; i++) {
      const prop = displayProps[i];
      const card = document.createElement('div');
      card.className = 'grid-card';

      const statusClass = prop.status === 'Ready to Move' ? 'status-ready' :
                          prop.status === 'Under Construction' ? 'status-construction' :
                          prop.status === 'New Launch' ? 'status-launch' : 'status-sold';

      card.innerHTML =
        '<img class="grid-card-image" src="' + prop.image + '" alt="' + prop.title + '" loading="lazy" onerror="this.src=\'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect fill="#eee" width="400" height="200"/></svg>') + '\'">' +
        '<div class="grid-card-body">' +
          '<h3 class="grid-card-title">' + prop.title + '</h3>' +
          '<p class="grid-card-meta">' + prop.category + ' \u00B7 ' + prop.location + '</p>' +
          '<p class="grid-card-price">' + prop.priceRange + '</p>' +
          '<span class="grid-card-status ' + statusClass + '">' + prop.status + '</span>' +
        '</div>';

      card.addEventListener('click', () => {
        window.location.href = 'mailto:inquiries@auraaestates.com?subject=Inquiry%3A%20' + encodeURIComponent(prop.title);
      });

      gridContainer.appendChild(card);
    }
  }

  // ===== ANALYTICS =====
  function trackEvent(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // ===== GSAP FALLBACK =====
  // If GSAP loads, use it for smoother transitions
  if (typeof gsap !== 'undefined') {
    // Enhance panel hover with GSAP
    const originalHoverProperty = hoverProperty;
    hoverProperty = function(propId) {
      originalHoverProperty(propId);
      gsap.to(heroHeadline, { opacity: 0.15, duration: 0.3, ease: 'power2.out' });
      gsap.to(heroSubheading, { opacity: 0.15, duration: 0.3, ease: 'power2.out' });
      gsap.to(centerPreview, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    };

    const originalUnhoverProperty = unhoverProperty;
    unhoverProperty = function() {
      if (state.selectedProperty) return;
      state.hoveredProperty = null;
      gsap.to(heroHeadline, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(heroSubheading, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(centerPreview, { opacity: 0, duration: 0.3, ease: 'power2.out', onComplete: () => {
        centerPreview.classList.remove('active');
      }});
    };
  }

  // ===== START =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
