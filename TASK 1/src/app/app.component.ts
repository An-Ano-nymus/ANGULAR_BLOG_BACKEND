import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-wrapper">
      <nav class="side-nav glass-effect">
        <div class="nav-header">
          <h1 class="app-title text-gradient">FUN BLOGS</h1>
          <p class="nav-subtitle">Share your stories</p>
        </div>
        
        <div class="nav-links">
          <a routerLink="/posts" routerLinkActive="active" class="nav-link">
            <span class="nav-icon">📚</span>
            <span>Explore Posts</span>
          </a>
          <a routerLink="/create" routerLinkActive="active" class="nav-link">
            <span class="nav-icon">✏️</span>
            <span>Write Post</span>
          </a>
        </div>
        
        <div class="nav-footer">
          <p class="footer-text">&copy; 2025 FUN BLOGS</p>
          <p class="footer-tagline">Where ideas come alive 🌟</p>
        </div>
      </nav>
      
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-wrapper {
      display: flex;
      min-height: 100vh;
    }
    
    .side-nav {
      width: 280px;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      border-right: 1px solid var(--border-color);
      background: rgba(255, 255, 255, 0.9);
    }
    
    .nav-header {
      margin-bottom: 3rem;
      text-align: center;
    }
    
    .app-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
    }
    
    .nav-subtitle {
      color: var(--text-medium);
      font-size: 0.9rem;
    }
    
    .nav-links {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .nav-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: var(--border-radius);
      color: var(--text-medium);
      font-weight: 500;
      transition: all 0.2s ease;
    }
    
    .nav-link:hover {
      color: var(--primary-color);
      background: rgba(99, 102, 241, 0.1);
      transform: translateX(4px);
    }
    
    .nav-link.active {
      color: var(--primary-color);
      background: rgba(99, 102, 241, 0.1);
    }
    
    .nav-icon {
      font-size: 1.25rem;
    }
    
    .nav-footer {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
    }
    
    .footer-text {
      color: var(--text-medium);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
    
    .footer-tagline {
      color: var(--text-medium);
      font-size: 0.875rem;
      font-style: italic;
    }
    
    .main-content {
      flex: 1;
      margin-left: 280px;
      padding: 2rem;
    }
    
    @media (max-width: 768px) {
      .side-nav {
        width: 80px;
        padding: 1rem;
      }
      
      .nav-header {
        margin-bottom: 2rem;
      }
      
      .app-title, .nav-subtitle, .nav-link span:not(.nav-icon), .nav-footer {
        display: none;
      }
      
      .nav-link {
        padding: 0.75rem;
        justify-content: center;
      }
      
      .main-content {
        margin-left: 80px;
      }
    }
  `]
})
export class AppComponent {
  title = 'FUN BLOGS';
}