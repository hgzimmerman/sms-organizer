

export class Loger {

    private readonly minimumSeverity: LogSeverity = LogSeverity.Info;
    private readonly allowedPurposes: Array<LogPurpose> = [LogPurpose.Instansiation, LogPurpose.Networking, LogPurpose.Serialization, LogPurpose.Presentation];

    public log(severity: LogSeverity, purpose: LogPurpose, object: string, message: string) {
        if (severity > this.minimumSeverity) {
            if (this.allowedPurposes.indexOf(purpose) > 0) {
                console.log(`${LogSeverity[severity]}: ${object}: ${message}`); // todo, use something other than stdout for logs :/
            }
        }
    }
}


/**
 * This won't show up in the logs, themselves, but it helps to isolate where problems are by removing 
 */
export enum LogPurpose {
    Instansiation,
    Networking,
    Serialization,
    Presentation,
}

export enum LogSeverity {
    Info = 1,
    Trace,
    Debug,
    Warn,
    Error
}