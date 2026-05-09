(function () {
  var icons = {
    mail: [
      '<path d="M4 6.5h16v11H4z"></path>',
      '<path d="m4 7 8 6 8-6"></path>'
    ].join(""),
    scholar: [
      '<path d="m3 8.5 9-4 9 4-9 4z"></path>',
      '<path d="M7 11v4.5c1.5 1.2 3.2 1.8 5 1.8s3.5-.6 5-1.8V11"></path>'
    ].join(""),
    github: [
      '<path d="M9 19c-4 1.2-4-2-5.5-2.4"></path>',
      '<path d="M15 22v-3.6c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.1 0-1.3-.5-2.5-1.3-3.4.1-.3.6-1.7-.1-3.4 0 0-1.1-.3-3.5 1.3a12 12 0 0 0-6.4 0C6.4 3.2 5.3 3.5 5.3 3.5c-.7 1.7-.2 3.1-.1 3.4A5 5 0 0 0 4 10.3c0 4.7 2.9 5.8 5.7 6.1-.4.4-.6.9-.6 1.7V22"></path>'
    ].join(""),
    file: [
      '<path d="M6 3h8l4 4v14H6z"></path>',
      '<path d="M14 3v5h5"></path>',
      '<path d="M9 13h6"></path>',
      '<path d="M9 17h6"></path>'
    ].join(""),
    linkedin: [
      '<path d="M6 9h4v11H6z"></path>',
      '<path d="M14 9h4v2c.7-1.3 2-2.2 3.4-2.2 3 0 4.6 2 4.6 5.7V20h-4v-5c0-1.5-.6-2.4-1.8-2.4S18 13.5 18 15v5h-4z" transform="scale(.78) translate(1 4)"></path>',
      '<path d="M8 5.8v.1"></path>'
    ].join(""),
    website: [
      '<circle cx="11" cy="11" r="6"></circle>',
      '<path d="m16 16 4 4"></path>',
      '<path d="M11 8v6"></path>',
      '<path d="M8 11h6"></path>'
    ].join(""),
    chat: [
      '<path d="M5 10.5c0-3 3-5.5 7-5.5s7 2.5 7 5.5-3 5.5-7 5.5c-.8 0-1.6-.1-2.3-.3L6 18l1.2-3.2A5.6 5.6 0 0 1 5 10.5z"></path>',
      '<path d="M9 11h.1"></path>',
      '<path d="M12 11h.1"></path>',
      '<path d="M15 11h.1"></path>'
    ].join(""),
    database: [
      '<ellipse cx="12" cy="6" rx="6" ry="3"></ellipse>',
      '<path d="M6 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6"></path>',
      '<path d="M6 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6"></path>'
    ].join(""),
    chart: [
      '<path d="M4 19h16"></path>',
      '<path d="M6 17V7"></path>',
      '<path d="m8 15 4-4 3 3 5-7"></path>'
    ].join("")
  };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text) {
      node.textContent = text;
    }
    return node;
  }

  function icon(name) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.innerHTML = icons[name] || "";
    return svg;
  }

  function section(title, className) {
    var block = el("section", className || "content-section");
    var heading = el("div", "section-heading compact");
    var h2 = el("h2", null, title);
    h2.id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    heading.appendChild(h2);
    block.setAttribute("aria-labelledby", h2.id);
    block.appendChild(heading);
    return block;
  }

  function appendTextParts(parent, parts) {
    if (!Array.isArray(parts)) {
      parent.appendChild(document.createTextNode(parts || ""));
      return;
    }

    parts.forEach(function (part) {
      if (typeof part === "string") {
        parent.appendChild(document.createTextNode(part));
        return;
      }

      var link = document.createElement("a");
      link.href = part.href;
      link.textContent = part.text;
      if (/^https?:\/\//.test(part.href)) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      parent.appendChild(link);
    });
  }

  function renderTextParts(tag, className, parts) {
    var node = el(tag, className);
    appendTextParts(node, parts);
    return node;
  }

  function renderAuthors(authors) {
    var node = el("p", "authors");

    if (!Array.isArray(authors)) {
      node.textContent = authors || "";
      return node;
    }

    authors.forEach(function (author, index) {
      if (index > 0) {
        node.appendChild(document.createTextNode(", "));
      }

      if (typeof author === "string") {
        node.appendChild(document.createTextNode(author));
        return;
      }

      var link = document.createElement("a");
      link.href = author.href;
      link.textContent = author.text;
      if (/^https?:\/\//.test(author.href)) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      node.appendChild(link);
    });

    return node;
  }

  function renderProfile(data) {
    var aside = document.getElementById("profile-panel");
    var content = el("div", "profile-content");
    var portrait = el("div", "portrait");
    var identity = el("div", "identity");
    var name = el("h1", null, data.name);
    var role = el("p", null, data.role);
    var institution = el("a", null, data.institution);
    var rule = el("div", "short-rule");
    var links = el("nav", "profile-links");
    var footer = el("footer", "profile-footer");
    var footerText = el("span", null, data.footer);

    portrait.setAttribute("aria-label", data.portraitAlt);
    if (data.portraitSrc) {
      var portraitImage = document.createElement("img");
      portraitImage.src = data.portraitSrc;
      portraitImage.alt = data.portraitAlt || data.name;
      portrait.appendChild(portraitImage);
    }
    institution.href = data.institutionUrl;
    links.setAttribute("aria-label", "Profile links");

    identity.appendChild(name);
    identity.appendChild(role);
    identity.appendChild(institution);

    data.links.forEach(function (item) {
      var link = el("a", "profile-link" + (item.featured ? " featured" : ""));
      link.href = item.href;
      link.appendChild(icon(item.icon));
      link.appendChild(el("span", null, item.label));
      links.appendChild(link);
    });

    content.appendChild(portrait);
    content.appendChild(identity);
    content.appendChild(rule);
    content.appendChild(links);
    footer.appendChild(footerText);

    aside.appendChild(content);
    aside.appendChild(footer);
  }

  function renderBio(data) {
    var block = el("section", "bio-section");
    var h2 = el("h2", null, data.title);
    h2.id = "bio-title";
    block.setAttribute("aria-labelledby", h2.id);
    block.appendChild(h2);

    data.paragraphs.forEach(function (paragraph) {
      block.appendChild(renderTextParts("p", null, paragraph));
    });

    return block;
  }

  function renderFeatureSection(data, kind) {
    var block = section(data.title, "content-section");
    var list = el("div", "row-list");

    data.items.forEach(function (item) {
      list.appendChild(renderFeatureItem(item, kind));
    });

    block.appendChild(list);
    return block;
  }

  function renderFeatureItem(item, kind) {
    var article = el("article", "feature-row " + kind + "-card");
    var thumbClass = kind === "project" ? "project-thumb" : "paper-thumb";
    var thumb = el("div", thumbClass);
    var copy = el("div", "row-copy");
    var actions = el("div", "row-actions");

    thumb.setAttribute("aria-hidden", "true");
    if (item.thumbnailSrc) {
      var img = document.createElement("img");
      img.src = item.thumbnailSrc;
      img.alt = item.thumbnailAlt || item.title;
      thumb.appendChild(img);
      thumb.removeAttribute("aria-hidden");
    } else if (kind === "project" && item.thumbnail) {
      thumb.appendChild(icon(item.thumbnail));
    }

    copy.appendChild(el("h3", null, item.title));
    copy.appendChild(renderAuthors(item.authors));
    copy.appendChild(el("p", "venue", item.venue));

    if (item.buttons && item.buttons.length) {
      actions.setAttribute("aria-label", kind === "project" ? "Project links" : "Publication links");
      item.buttons.forEach(function (button) {
        actions.appendChild(renderButton(button));
      });
      copy.appendChild(actions);
    }

    article.appendChild(thumb);
    article.appendChild(copy);
    return article;
  }

  function renderButton(button) {
    var link = el("a", "action-button" + (button.label === "Website" ? " website-button" : ""));
    link.href = button.href;
    if (button.icon) {
      link.appendChild(icon(button.icon));
    }
    link.appendChild(document.createTextNode(button.label));
    return link;
  }

  function renderExperience(data) {
    var block = section(data.title, "content-section");
    var timeline = el("div", "timeline");

    data.items.forEach(function (item) {
      var row = el("article", "timeline-item" + (item.current ? " current" : ""));
      var date = el("time", null, item.date);
      var role = el("div");

      role.appendChild(el("h3", null, item.title));
      role.appendChild(el("p", null, item.place));

      row.appendChild(date);
      row.appendChild(role);
      row.appendChild(el("p", null, item.details));
      timeline.appendChild(row);
    });

    block.appendChild(timeline);
    return block;
  }

  function renderMisc(data) {
    var block = section(data.title, "content-section misc-section");
    var text = el("div", "misc-text");

    data.items.forEach(function (item) {
      var p = el("p");
      var strong = el("strong", null, item.label + ".");
      p.appendChild(strong);
      p.appendChild(document.createTextNode(" " + item.text));
      text.appendChild(p);
    });

    block.appendChild(text);
    return block;
  }

  function render() {
    var data = window.siteData;
    var main = document.getElementById("main-content");

    renderProfile(data.profile);
    main.appendChild(renderBio(data.bio));
    main.appendChild(renderFeatureSection(data.publications, "publication"));
    main.appendChild(renderFeatureSection(data.projects, "project"));
    main.appendChild(renderExperience(data.experience));
    main.appendChild(renderMisc(data.misc));
  }

  render();
})();
