import { User, CreditCard, Key, Mail } from "lucide-react"

const OnboardingSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Step 1: Signup */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
            1
          </div>
          <h3 className="text-base md:text-lg font-semibold">Signup</h3>
        </div>
        <div className="min-h-10 md:min-h-12">
          <p className="text-sm text-muted-foreground">
            Create an account to get started. You can set up an org for your team later.
          </p>
        </div>
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
            <div className="h-4 w-12 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
          </div>
          <div className="flex flex-row gap-2 max-w-56">
            {/* OAuth providers */}
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2 3.54 13.1 8.1l1.3-2.93 4.8-1.62Z" fill="#E17726"/>
                <path d="m4.8 3.54 6.05 4.6-1.24-2.98L4.8 3.54ZM16.83 15.9l-1.78 3.08 3.8 1.18 1.07-4.22-3.1-.05Z" fill="#E27625"/>
              </svg>
            </div>
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Buy credits */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
            2
          </div>
          <h3 className="text-base md:text-lg font-semibold">Buy credits</h3>
        </div>
        <div className="min-h-10 md:min-h-12">
          <p className="text-sm text-muted-foreground">
            Credits can be used with any model or provider.
          </p>
        </div>
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-6 flex flex-col justify-center">
                <div className="h-1 bg-primary/20 rounded"></div>
                <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Apr 1</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$99</span>
            </div>
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Mar 30</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Get API key */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
            3
          </div>
          <h3 className="text-base md:text-lg font-semibold">Get your API key</h3>
        </div>
        <div className="min-h-10 md:min-h-12">
          <p className="text-sm text-muted-foreground">
            Create an API key and start making requests.{" "}
            <a href="#" className="text-primary hover:underline">
              Fully OpenAI compatible
            </a>
            .
          </p>
        </div>
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            <div className="h-6 flex-1 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground tracking-wide">OPENROUTER_API_KEY</span>
            </div>
          </div>
          <div className="h-6 bg-primary/5 rounded flex items-center px-2">
            <span className="text-xs tracking-wider">••••••••••••••••</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingSteps