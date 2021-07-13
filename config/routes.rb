Rails.application.routes.draw do
  root "static_pages#index"
  namespace :js do
    resources :code, only: :index
  end
  namespace :vuetify do
    resources :code, only: :index
  end
end
