// Basic security monitoring and error logging
export class SecurityMonitor {
  private static instance: SecurityMonitor;
  
  private constructor() {
    this.setupErrorLogging();
    this.setupCSPViolationReporting();
  }
  
  public static getInstance(): SecurityMonitor {
    if (!SecurityMonitor.instance) {
      SecurityMonitor.instance = new SecurityMonitor();
    }
    return SecurityMonitor.instance;
  }
  
  private setupErrorLogging(): void {
    window.addEventListener('error', (event) => {
      this.logSecurityEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        timestamp: new Date().toISOString()
      });
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      this.logSecurityEvent('unhandled_promise_rejection', {
        reason: event.reason?.toString() || 'Unknown promise rejection',
        timestamp: new Date().toISOString()
      });
    });
  }
  
  private setupCSPViolationReporting(): void {
    document.addEventListener('securitypolicyviolation', (event) => {
      this.logSecurityEvent('csp_violation', {
        violatedDirective: event.violatedDirective,
        blockedURI: event.blockedURI,
        documentURI: event.documentURI,
        effectiveDirective: event.effectiveDirective,
        timestamp: new Date().toISOString()
      });
    });
  }
  
  private logSecurityEvent(eventType: string, details: Record<string, any>): void {
    // In a production environment, you would send this to your security monitoring service
    // For now, we'll just log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Security Event] ${eventType}:`, details);
    }
    
    // Store security events in localStorage for debugging (limit to last 50 events)
    try {
      const events = JSON.parse(localStorage.getItem('security_events') || '[]');
      events.unshift({ type: eventType, ...details });
      localStorage.setItem('security_events', JSON.stringify(events.slice(0, 50)));
    } catch (error) {
      // Silently fail if localStorage is not available
    }
  }
  
  public getRecentEvents(): any[] {
    try {
      return JSON.parse(localStorage.getItem('security_events') || '[]');
    } catch {
      return [];
    }
  }
}

// Initialize security monitoring
export const initializeSecurity = () => {
  SecurityMonitor.getInstance();
};