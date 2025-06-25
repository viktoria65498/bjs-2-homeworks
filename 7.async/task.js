class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, callback) {
        if (!callback || !time) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true,
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
    }

    getCurrentFormattedTime() {
        const currentTime = new Date()
        const hours = currentTime.getHours().toString().padStart(2, '0')
        const minutes = currentTime.getMinutes().toString().padStart(2, '0')
        return hours + ':' + minutes
    }

    start() {
        if (this.intervalId !== null) {
            return
        }

        const currentTime = this.getCurrentFormattedTime()
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false
                    alarm.callback()
                }
            })
        }, 1000)
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true
        })
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}