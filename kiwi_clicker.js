document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.MainButton');
    const counter = document.querySelector('#click-counter');
    let clickCount = 0;
    let clickValue = 1;
    let upgradeCost = 25;

    if (!main) return;

    main.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        clickCount += clickValue;
        if (counter) {
            counter.textContent = `Clicks: ${clickCount}`;
        }

        main.classList.remove('pulsing');
        void main.offsetWidth;
        main.classList.add('pulsing');
    });

    main.addEventListener('animationend', (e) => {
        if (e.animationName === 'pulsate') {
            main.classList.remove('pulsing');
        }
    });

    const upgradeBtn1 = document.querySelector('#upgrade-1');
    const upgradeCostLabel = document.querySelector('#upgrade-1-cost');
    let milkUpgradeCost = 200;
    const upgradeBtn2 = document.querySelector('#upgrade-2');
    const upgrade2CostLabel = document.querySelector('#upgrade-2-cost');
    const upgradeBtn3 = document.querySelector('#upgrade-3');
    const upgrade3CostLabel = document.querySelector('#upgrade-3-cost');
    const upgradeBtn6 = document.querySelector('#upgrade-6');
    const upgrade6CostLabel = document.querySelector('#upgrade-6-cost');
    const upgradeBtn7 = document.querySelector('#upgrade-7');
    const upgrade7CostLabel = document.querySelector('#upgrade-7-cost');
    const upgradeBtn8 = document.querySelector('#upgrade-8');
    const upgrade8CostLabel = document.querySelector('#upgrade-8-cost');
    const upgradeBtn9 = document.querySelector('#upgrade-9');
    const upgrade9CostLabel = document.querySelector('#upgrade-9-cost');
    const upgradeBtn10 = document.querySelector('#upgrade-10');
    const upgrade10CostLabel = document.querySelector('#upgrade-10-cost');
    let icePurchaseCount = 0;
    let milkPurchaseCount = 0;
    let teaPurchaseCount = 0;
    let teaUpgradeCost = 500;
    let coffeeUpgradeCost = 1000;
    let coffeePurchaseCount = 0;
    let matchaUpgradeCost = 2000;
    let matchaPurchaseCount = 0;
    let sugarUpgradeCost = 4000;
    let syrupUpgradeCost = 8000;
    let whippedCreamUpgradeCost = 16000;
    let iceCreamUpgradeCost = 32000;
    let jellyUpgradeCost = 64000;
    let sugarPurchaseCount = 0;
    let syrupPurchaseCount = 0;
    let whippedCreamPurchaseCount = 0;
    let iceCreamPurchaseCount = 0;
    let jellyPurchaseCount = 0;
    const statClickPower = document.querySelector('#stat-click-power');
    const statIceCount = document.querySelector('#stat-ice-count');
    const statMilkCount = document.querySelector('#stat-milk-count');
    const statTeaCount = document.querySelector('#stat-tea-count');
    const statCoffeeCount = document.querySelector('#stat-coffee-count');
    const statMatchaCount = document.querySelector('#stat-matcha-count');
    const statSugarCount = document.querySelector('#stat-sugar-count');
    const statSyrupCount = document.querySelector('#stat-syrup-count');
    const statWhippedCreamCount = document.querySelector('#stat-whipped-cream-count');
    const statIceCreamCount = document.querySelector('#stat-ice-cream-count');
    const statJellyCount = document.querySelector('#stat-jelly-count');
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
    const updateSugarUpgradeLabel = () => {
        if (upgrade6CostLabel) {
            upgrade6CostLabel.textContent = `Cost: ${sugarUpgradeCost}`;
        }
    };
    const updateSyrupUpgradeLabel = () => {
        if (upgrade7CostLabel) {
            upgrade7CostLabel.textContent = `Cost: ${syrupUpgradeCost}`;
        }
    };
    const updateWhippedCreamUpgradeLabel = () => {
        if (upgrade8CostLabel) {
            upgrade8CostLabel.textContent = `Cost: ${whippedCreamUpgradeCost}`;
        }
    };
    const updateIceCreamUpgradeLabel = () => {
        if (upgrade9CostLabel) {
            upgrade9CostLabel.textContent = `Cost: ${iceCreamUpgradeCost}`;
        }
    };
    const updateJellyUpgradeLabel = () => {
        if (upgrade10CostLabel) {
            upgrade10CostLabel.textContent = `Cost: ${jellyUpgradeCost}`;
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
        if (statTeaCount) {
            statTeaCount.textContent = teaPurchaseCount;
        }
        if (statCoffeeCount) {
            statCoffeeCount.textContent = coffeePurchaseCount;
        }
        if (statMatchaCount) {
            statMatchaCount.textContent = matchaPurchaseCount;
        }
        if (statSugarCount) {
            statSugarCount.textContent = sugarPurchaseCount;
        }
        if (statSyrupCount) {
            statSyrupCount.textContent = syrupPurchaseCount;
        }
        if (statWhippedCreamCount) {
            statWhippedCreamCount.textContent = whippedCreamPurchaseCount;
        }
        if (statIceCreamCount) {
            statIceCreamCount.textContent = iceCreamPurchaseCount;
        }
        if (statJellyCount) {
            statJellyCount.textContent = jellyPurchaseCount;
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
                upgradeBtn2.classList.remove('pulsing');
                void upgradeBtn2.offsetWidth;
                upgradeBtn2.classList.add('pulsing');
            }
        });
        upgradeBtn2.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn2.classList.remove('pulsing');
            }
        });
    }

    const updateTeaUpgradeLabel = () => {
        if (upgrade3CostLabel) {
            upgrade3CostLabel.textContent = `Cost: ${teaUpgradeCost}`;
        }
    };

    if (upgradeBtn3) {
        updateTeaUpgradeLabel();
        updateStats();

        upgradeBtn3.addEventListener('click', () => {
            if (clickCount >= teaUpgradeCost) {
                clickCount -= teaUpgradeCost;
                clickValue *= 1.5;
                teaPurchaseCount += 1;
                teaUpgradeCost = Math.ceil(teaUpgradeCost * 1.5);
                updateTeaUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn3.classList.remove('pulsing');
                void upgradeBtn3.offsetWidth;
                upgradeBtn3.classList.add('pulsing');
            }
        });
        upgradeBtn3.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn3.classList.remove('pulsing');
            }
        });
    }

    const upgradeBtn4 = document.querySelector('#upgrade-4');
    const upgrade4CostLabel = document.querySelector('#upgrade-4-cost');
    const updateCoffeeUpgradeLabel = () => {
        if (upgrade4CostLabel) {
            upgrade4CostLabel.textContent = `Cost: ${coffeeUpgradeCost}`;
        }
    };

    if (upgradeBtn4) {
        updateCoffeeUpgradeLabel();
        updateStats();

        upgradeBtn4.addEventListener('click', () => {
            if (clickCount >= coffeeUpgradeCost) {
                clickCount -= coffeeUpgradeCost;
                clickValue += 10;
                coffeePurchaseCount += 1;
                coffeeUpgradeCost = Math.ceil(coffeeUpgradeCost * 1.5);
                updateCoffeeUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn4.classList.remove('pulsing');
                void upgradeBtn4.offsetWidth;
                upgradeBtn4.classList.add('pulsing');
            }
        });
        upgradeBtn4.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn4.classList.remove('pulsing');
            }
        });
    }

    const upgradeBtn5 = document.querySelector('#upgrade-5');
    const upgrade5CostLabel = document.querySelector('#upgrade-5-cost');
    const updateMatchaUpgradeLabel = () => {
        if (upgrade5CostLabel) {
            upgrade5CostLabel.textContent = `Cost: ${matchaUpgradeCost}`;
        }
    };

    if (upgradeBtn5) {
        updateMatchaUpgradeLabel();
        updateStats();

        upgradeBtn5.addEventListener('click', () => {
            if (clickCount >= matchaUpgradeCost) {
                clickCount -= matchaUpgradeCost;
                clickValue += 25;
                matchaPurchaseCount += 1;
                updateMatchaUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn5.classList.remove('pulsing');
                void upgradeBtn5.offsetWidth;
                upgradeBtn5.classList.add('pulsing');
            }
        });
        upgradeBtn5.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn5.classList.remove('pulsing');
            }
        });
    }

    if (upgradeBtn6) {
        updateSugarUpgradeLabel();
        updateStats();

        upgradeBtn6.addEventListener('click', () => {
            if (clickCount >= sugarUpgradeCost) {
                clickCount -= sugarUpgradeCost;
                clickValue += 50;
                sugarPurchaseCount += 1;
                sugarUpgradeCost = Math.ceil(sugarUpgradeCost * 1.5);
                updateSugarUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn6.classList.remove('pulsing');
                void upgradeBtn6.offsetWidth;
                upgradeBtn6.classList.add('pulsing');
            }
        });
        upgradeBtn6.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn6.classList.remove('pulsing');
            }
        });
    }

    if (upgradeBtn7) {
        updateSyrupUpgradeLabel();
        updateStats();

        upgradeBtn7.addEventListener('click', () => {
            if (clickCount >= syrupUpgradeCost) {
                clickCount -= syrupUpgradeCost;
                clickValue += 100;
                syrupPurchaseCount += 1;
                syrupUpgradeCost = Math.ceil(syrupUpgradeCost * 1.5);
                updateSyrupUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn7.classList.remove('pulsing');
                void upgradeBtn7.offsetWidth;
                upgradeBtn7.classList.add('pulsing');
            }
        });
        upgradeBtn7.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn7.classList.remove('pulsing');
            }
        });
    }

    if (upgradeBtn8) {
        updateWhippedCreamUpgradeLabel();
        updateStats();

        upgradeBtn8.addEventListener('click', () => {
            if (clickCount >= whippedCreamUpgradeCost) {
                clickCount -= whippedCreamUpgradeCost;
                clickValue *= 2;
                whippedCreamPurchaseCount += 1;
                whippedCreamUpgradeCost = Math.ceil(whippedCreamUpgradeCost * 1.5);
                updateWhippedCreamUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn8.classList.remove('pulsing');
                void upgradeBtn8.offsetWidth;
                upgradeBtn8.classList.add('pulsing');
            }
        });
        upgradeBtn8.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn8.classList.remove('pulsing');
            }
        });
    }

    if (upgradeBtn9) {
        updateIceCreamUpgradeLabel();
        updateStats();

        upgradeBtn9.addEventListener('click', () => {
            if (clickCount >= iceCreamUpgradeCost) {
                clickCount -= iceCreamUpgradeCost;
                clickValue += 250;
                iceCreamPurchaseCount += 1;
                iceCreamUpgradeCost = Math.ceil(iceCreamUpgradeCost * 1.5);
                updateIceCreamUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn9.classList.remove('pulsing');
                void upgradeBtn9.offsetWidth;
                upgradeBtn9.classList.add('pulsing');
            }
        });
        upgradeBtn9.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn9.classList.remove('pulsing');
            }
        });
    }

    if (upgradeBtn10) {
        updateJellyUpgradeLabel();
        updateStats();

        upgradeBtn10.addEventListener('click', () => {
            if (clickCount >= jellyUpgradeCost) {
                clickCount -= jellyUpgradeCost;
                clickValue *= 6;
                jellyPurchaseCount += 1;
                jellyUpgradeCost = Math.ceil(jellyUpgradeCost * 1.5);
                updateJellyUpgradeLabel();
                updateStats();
                if (counter) {
                    counter.textContent = `Clicks: ${clickCount}`;
                }
                upgradeBtn10.classList.remove('pulsing');
                void upgradeBtn10.offsetWidth;
                upgradeBtn10.classList.add('pulsing');
            }
        });
        upgradeBtn10.addEventListener('animationend', (e) => {
            if (e.animationName === 'pulsate') {
                upgradeBtn10.classList.remove('pulsing');
            }
        });
    }
});
