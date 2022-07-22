export const tabs = () => {
    let tabsTriggers = document.querySelector(".decisions__tabs-triggers"),
    tabsTriggersItems = document.querySelectorAll(".decisions__tabs-item"),
    tabsContentItems = document.querySelectorAll(".decisions__tabs-content-item"),
    tabsArrows = document.querySelector('.decisions__tabs-arrows'),
    activeTab = 0,
    countOfTabs = tabsTriggersItems.length;
    
    tabsTriggers.addEventListener("click", function(event) {
        const target = event.target;
        event.preventDefault();

        if(target.classList.contains('decisions__tabs-item') || 
            target.parentNode.classList.contains('decisions__tabs-item')){
                tabsTriggersItems.forEach(el => el.classList.remove("decisions__tabs-item--active"))
                tabsContentItems.forEach(el => el.classList.remove("decisions__tabs-content-item--active"))
                target.classList.add("decisions__tabs-item--active");
        
                const idContentToShow = target.getAttribute('href');
                document.querySelector(idContentToShow).classList.add('decisions__tabs-content-item--active');
            }
    });
    tabsTriggersItems[0].click()

    //arrows
    tabsArrows.addEventListener('click', function(event) {
        const target = event.target;
        event.preventDefault();
        
        if(target && (target.classList.contains('decisions__tabs-arrows-left') ||
            target.parentNode.classList.contains('decisions__tabs-arrows-left'))){
                tabsTriggersItems.forEach((el, idx) => el.className.includes('--active') ? activeTab = idx - 1 : '')
                if(activeTab < 0) activeTab = countOfTabs - 1;
                if(activeTab > countOfTabs - 1) activeTab = 0;

                tabsTriggersItems[activeTab].click();
            
        } else if ((target && (target.classList.contains('decisions__tabs-arrows-right') ||
                    target.parentNode.classList.contains('decisions__tabs-arrows-right')))){
            tabsTriggersItems.forEach((el, idx) => el.className.includes('--active') ? activeTab = idx + 1 : '')
            if(activeTab < 0) activeTab = countOfTabs - 1;
            if(activeTab > countOfTabs - 1) activeTab = 0;

            tabsTriggersItems[activeTab].click();
        }
    })
}