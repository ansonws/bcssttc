Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tournaments, only: :index do
          # get '', to: 'tournaments#show'
          get :entries, on: :member
      end
      resources :tournaments, only: :show
    end
  end
end
