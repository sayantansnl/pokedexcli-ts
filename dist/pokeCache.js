export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val: val
        });
    }
    get(key) {
        const entry = this.#cache.get(key);
        if (!entry) {
            return undefined;
        }
        return entry.val;
    }
    #reap() {
        const threshold = Date.now() - this.#interval;
        for (const [key, val] of this.#cache) {
            if (val.createdAt <= threshold) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }
    stopReapLoop() {
        if (!this.#reapIntervalId) {
            return;
        }
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
