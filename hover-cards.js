// HOVER CARD SYSTEM (COMPLETE)
class HoverCardSystem {
    constructor() {
        this.menuItems = document.querySelectorAll('.menu-item');
        this.init();
    }

    init() {
        this.menuItems.forEach(item => {
            const img = item.querySelector('img');
            const hoverCard = item.querySelector('.hover-card');

            // Calculate dynamic positioning
            img.addEventListener('load', () => {
                hoverCard.style.width = `${img.offsetWidth}px`;
                this.setHoverCardPosition(item);
            });

            // Event listeners
            item.addEventListener('mouseenter', () => this.showHoverCard(item));
            item.addEventListener('mouseleave', () => this.hideHoverCard(item));
            window.addEventListener('resize', () => this.setHoverCardPosition(item));
        });
    }

    setHoverCardPosition(item) {
        const rect = item.getBoundingClientRect();
        const hoverCard = item.querySelector('.hover-card');
        hoverCard.style.top = `${rect.top + window.scrollY + rect.height}px`;
        hoverCard.style.left = `${rect.left}px`;
    }

    showHoverCard(item) {
        const hoverCard = item.querySelector('.hover-card');
        hoverCard.style.opacity = '1';
        hoverCard.style.visibility = 'visible';
        hoverCard.style.transform = 'translateY(-20px)';
    }

    hideHoverCard(item) {
        const hoverCard = item.querySelector('.hover-card');
        hoverCard.style.opacity = '0';
        hoverCard.style.visibility = 'hidden';
        hoverCard.style.transform = 'translateY(0)';
    }
}

// Initialize hover cards
document.addEventListener('DOMContentLoaded', () => new HoverCardSystem());