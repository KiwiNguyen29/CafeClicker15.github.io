document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.MainButton');
    const counter = document.querySelector('#click-counter');
    let clickCount = 0;
    let clickValue = 1;
    let upgradeCost = 25;

    if (!main) return;

    // Trigger pulsate on left mouse button (button === 0)
    main.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        clickCount += clickValue;
        if (counter) {
            counter.textContent = `Clicks: ${clickCount}`;
        }

        // restart animation by removing and re-adding class
        main.classList.remove('pulsing');
        void main.offsetWidth; // force reflow
        main.classList.add('pulsing');
    });

    // Clean up class after animation ends
    main.addEventListener('animationend', (e) => {
        if (e.animationName === 'pulsate') {
            main.classList.remove('pulsing');
        }
    });

    // Handle upgrade button 1 - costs 25 clicks, increases click value by 1
    const upgradeBtn1 = document.querySelector('#upgrade-1');
    const upgradeCostLabel = document.querySelector('#upgrade-1-cost');
    let milkUpgradeCost = 200;
    const upgradeBtn2 = document.querySelector('#upgrade-2');
    const upgrade2CostLabel = document.querySelector('#upgrade-2-cost');
    let icePurchaseCount = 0;
    let milkPurchaseCount = 0;
    const statClickPower = document.querySelector('#stat-click-power');
    const statIceCount = document.querySelector('#stat-ice-count');
    const statMilkCount = document.querySelector('#stat-milk-count');
    const updateUpgradeCostLabel = () => {
        if (upgradeCostLabel) {
            upgradeCostLabel.textContent = `Cost: ${upgradeCost}`;
        }
    };
    const updateMilkUpgradeLabel = () => {
        if (upgrade2CostLabel) {
            upgrade2CostLabel.textContent = `Cost: ${milkUpgradeCost}`;
        }
    };
    const updateStats = () => {
        if (statClickPower) {
            statClickPower.textContent = clickValue.toFixed(2).replace(/\.00$/, '');
        }
        if (statIceCount) {
            statIceCount.textContent = icePurchaseCount;
        }
        if (statMilkCount) {
            statMilkCount.textContent = milkPurchaseCount;
        }
    };

    if (upgradeBtn1) {
        upgradeBtn1.setAttribute('data-cost', `Cost: ${upgradeCost}`);
        updateUpgradeCostLabel();

        upgradeBtn1.addEventListener('click', () => {
            if (clickCount >= upgradeCost) {
                clickCount -= upgradeCost;
                clickValue += 1;
                icePurchaseCount += 1;
                upgradeCost += 25;
                upgradeBtn1.setAttribute('data-cost', `Cost: ${upgradeCost}`);
                updateUpgradeCostLabel();
                updateStats();
                upgradeBtn1.classList.remove('pulsing');
                void upgradeBtn1.offsetWidth;
                upgradeBtn1.classList.add('pulsing');
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
            } else {
                alert(`Not enough clicks! You need ${upgradeCost} clicks for this upgrade.`);
            }
        });

        upgradeBtn1.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn1.classList.remove('pulsing');
            }
        });
    }

    if (upgradeBtn2) {
        updateMilkUpgradeLabel();
        updateStats();

        upgradeBtn2.addEventListener('click', () => {
            if (clickCount >= milkUpgradeCost) {
                clickCount -= milkUpgradeCost;
                clickValue *= 1.25;
                milkPurchaseCount += 1;
                milkUpgradeCost = Math.ceil(milkUpgradeCost * 1.5);
                updateMilkUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
            } else {
                alert(`Not enough clicks! You need ${milkUpgradeCost} clicks for this upgrade.`);
            }
        });
    }
});
