import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Layout } from '@/components/layout/Layout';

import Home from '@/pages/home';
import About from '@/pages/about';
import ServicesList from '@/pages/services';
import ServiceDetail from '@/pages/services/[slug]';
import Solutions from '@/pages/solutions';
import SolutionDetail from '@/pages/solutions/[slug]';
import Technologies from '@/pages/technologies';
import Industries from '@/pages/industries';
import IndustryDetail from '@/pages/industries/[slug]';
import Process from '@/pages/process';
import Portfolio from '@/pages/portfolio';
import Insights from '@/pages/insights';
import InsightDetail from '@/pages/insights/[slug]';
import Careers from '@/pages/careers';
import Contact from '@/pages/contact';
import Privacy from '@/pages/privacy';
import Terms from '@/pages/terms';
import Cookies from '@/pages/cookies';
import ThankYou from '@/pages/thank-you';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={ServicesList} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/solutions/:slug" component={SolutionDetail} />
        <Route path="/technologies" component={Technologies} />
        <Route path="/industries" component={Industries} />
        <Route path="/industries/:slug" component={IndustryDetail} />
        <Route path="/process" component={Process} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/insights" component={Insights} />
        <Route path="/insights/:slug" component={InsightDetail} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;