export type Idol = {
    name: string,
    color: string,
    birthday: string
}

export class LoveLiveUtils {
    public TODAY: Date;
    private idols = [] as Idol[]
    private IdolDataUrl = "https://gist.githubusercontent.com/ninjawarrior1337/2a51ec53e679550a1d254a465ee79c11/raw"
    public async setup() {
        if (this.idols.length > 0) {
            return
        }
        this.TODAY = new Date(Date.now())
        let r = await fetch(this.IdolDataUrl)
        let j = await r.json()
        this.idols = j.idols
    }
    private getTZDayMonth(tz: string): [string, string] {
        var month = this.TODAY.toLocaleDateString("en-US", {
            timeZone: tz,
            month: "numeric"
        })
        var day = this.TODAY.toLocaleDateString("en-US", {
            timeZone: tz,
            day: "numeric"
        })

        return [month, day]
    }

    private checkBirthday(i: Idol, tz: string): boolean {
        const [iMonth, iDay] = i.birthday.split("/")
        const [tMonth, tDay] = this.getTZDayMonth(tz)
        if (tMonth == iMonth && tDay == iDay) {
            return true
        }
        return false;
    }

    public getBirthdayIdol(): Idol | null {
        //Check JP birthday first
        for (var i of this.idols) {
            if (this.checkBirthday(i, "Asia/Tokyo")) {
                return i
            }
        }
        //Check US birthdays if no JP birthdays exist
        for (var i of this.idols) {
            if (this.checkBirthday(i, "America/Los_Angeles")) {
                return i
            }
        }
        return import.meta.env.DEV ? this.idols.find((v) => v.name === "Wakana Shiki") || null : null
    }
}

export const LL = new LoveLiveUtils()

export async function get(req: Request) {
    await LL.setup()

    return new Response(JSON.stringify({
        idol: LL.getBirthdayIdol()
    }), {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
}