Portfolio::Application.routes.draw do
 
	root 'welcome#index'

	resource :welcome, only: [:index]

	namespace :json, constraints: { format: 'json' } do

		resources :sections 
		
	end
end
