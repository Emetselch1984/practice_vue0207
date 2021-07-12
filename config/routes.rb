Rails.application.routes.draw do
  root "static_pages#index"
  namespace :js do
    resources :code, only: :index
  end
  get "check",to: "check_css#index"
end
