Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tournaments, only: [:index, :show] do
        resources :seasons, path: 'entries'
      end 
    end
  end
end
